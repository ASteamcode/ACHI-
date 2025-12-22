'use strict';

const escapeXml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

module.exports = {
  async sitemap(ctx) {
    const baseUrl = (process.env.PUBLIC_SITE_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');

    const [pages, services, projects] = await Promise.all([
      strapi.entityService.findMany('api::page.page', {
        filters: { publishedAt: { $notNull: true } },
        populate: ['market'],
        locale: 'all',
        pagination: { pageSize: 10000 },
      }),
      strapi.entityService.findMany('api::service.service', {
        filters: { publishedAt: { $notNull: true } },
        populate: ['market'],
        locale: 'all',
        pagination: { pageSize: 10000 },
      }),
      strapi.entityService.findMany('api::project.project', {
        filters: { publishedAt: { $notNull: true } },
        populate: ['market'],
        locale: 'all',
        pagination: { pageSize: 10000 },
      }),
    ]);

    const buildLoc = (item) => {
      const marketCode = item.market?.code;
      const slug = item.slug;
      const locale = item.locale;
      if (!marketCode || !slug || !locale) return null;
      return `${baseUrl}/${marketCode}/${locale}/${slug}`;
    };

    const all = [...pages, ...services, ...projects];

    const urls = all
      .map((item) => {
        const loc = buildLoc(item);
        if (!loc) return null;
        const lastmod = item.updatedAt ? new Date(item.updatedAt).toISOString() : new Date().toISOString();
        return `<url><loc>${escapeXml(loc)}</loc><lastmod>${escapeXml(lastmod)}</lastmod></url>`;
      })
      .filter(Boolean)
      .join('');

    ctx.type = 'application/xml';
    ctx.body = `<?xml version="1.0" encoding="UTF-8"?>` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      urls +
      `</urlset>`;
  },

  async robots(ctx) {
    const apiBase = (process.env.PUBLIC_SITE_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');
    ctx.type = 'text/plain';
    ctx.body = `User-agent: *\nAllow: /\nSitemap: ${apiBase}/api/sitemap.xml\n`;
  },
};
