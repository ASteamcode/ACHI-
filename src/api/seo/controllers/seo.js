'use strict';

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

module.exports = {
  async sitemap(ctx) {
    const baseUrl =
      process.env.PUBLIC_SITE_BASE_URL || 'http://localhost:3000';

    const pages = await strapi.entityService.findMany(
      'api::page.page',
      {
        filters: { publishedAt: { $notNull: true } },
        populate: ['market'],
        locale: 'all',
      }
    );

    const urls = pages
      .map((page) => {
        if (!page.slug || !page.market?.code) return null;

        return `
          <url>
            <loc>${escapeXml(
              `${baseUrl}/${page.market.code}/${page.locale}/${page.slug}`
            )}</loc>
            <lastmod>${new Date(page.updatedAt).toISOString()}</lastmod>
          </url>
        `;
      })
      .filter(Boolean)
      .join('');

    ctx.type = 'application/xml';
    ctx.body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  },

  async robots(ctx) {
    const baseUrl =
      process.env.PUBLIC_SITE_BASE_URL || 'http://localhost:3000';

    ctx.type = 'text/plain';
    ctx.body = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/api/sitemap.xml
`;
  },
};
