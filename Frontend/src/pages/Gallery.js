import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

const PER_PAGE = 39;

const Gallery = () => {
  const { t } = useTranslation();

  const images = useMemo(() => {
    const files = [
      "0W0A1233.JPG",
      "1.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "124553811_724242481518321_2860198893114815692_n copy.jpg",
      "124553811_724242481518321_2860198893114815692_n.jpg",
      "124553811_724242481518321_2860198893114815692_n.webp",
      "13.jpg",
      "131335709_745181546091081_9030796893974946614_n.jpg",
      "131335709_745181546091081_9030796893974946614_n.webp",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "19.jpg",
      "1cbd4530-11ea-4edb-8fb4-3c35cd87dd71 2.JPG",
      "1f02ece1-0364-4505-8d01-85225135699a.JPG",
      "20.jpg",
      "20230912_165441000_iOS.jpg",
      "20230912_165441000_iOS.webp",
      "20230918_132318003_iOS.jpg",
      "20230918_132318003_iOS.webp",
      "20230918_132318522_iOS.jpg",
      "20819369_135108873765021_8187137705964148355_o (1) copy.jpg",
      "20819369_135108873765021_8187137705964148355_o (1).jpg",
      "20819369_135108873765021_8187137705964148355_o(1).webp",
      "21.jpg",
      "21366849_140088179933757_8163962528685330959_o.jpg",
      "21366849_140088179933757_8163962528685330959_o.webp",
      "22.jpg",
      "23.jpg",
      "24.jpg",
      "253213619_932964847312749_3737623131019213491_n.jpg",
      "253213619_932964847312749_3737623131019213491_n.webp",
      "259513852_941702983105602_5165317443361113593_n.jpg",
      "259513852_941702983105602_5165317443361113593_n.webp",
      "26.jpg",
      "27.jpg",
      "277806325_1024566231485943_3578252931848770518_n (2).jpg",
      "277806325_1024566231485943_3578252931848770518_n.jpg",
      "277806325_1024566231485943_3578252931848770518_n.webp",
      "28.jpg",
      "291325225_1079483295994236_1324654144776147872_n.jpg",
      "2a5ae51a-33c5-410e-b03e-f3fb48c69675.JPG",
      "2c5d7506-1af6-45bc-b85f-34fe017c874b.JPG",
      "2ec2c8f4-e8c9-46ee-be6d-1dcfdd09dac1.JPG",
      "3.jpg",
      "30.jpg",
      "31.jpg",
      "32.jpg",
      "327882636_1824634337908419_4776560427938409227_n (1).jpg",
      "374b5d84-5d65-487c-8617-3e95def1f80f.JPG",
      "4.jpg",
      "42090073_284486698827237_2692390602724605952_n copy.jpg",
      "42090073_284486698827237_2692390602724605952_n.jpg",
      "42090073_284486698827237_2692390602724605952_n.webp",
      "473737fb-1e48-40f4-ab29-ad87f1939d51.JPG",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "76dd0c66-399f-424f-bb9b-2ce07b8e1c91.JPG",
      "79DB6A60-3D2B-4299-B7C3-FCB6E70D3AAF.JPG",
      "7c251864-7164-4af2-b702-22e112bc685c.JPG",
      "8.jpg",
      "84d1228b-e982-49c4-ad41-d8c83fd86d0c 2.JPG",
      "9.jpg",
      "9ba61ac8-cd07-4036-8cbb-f9124795dcb0 3.JPG",
      "9c9d3d26-4d69-43ab-a147-d543da02d39c.JPG",
      "aaae0c25-f9eb-4f57-8a1d-76ef36d81598 2.JPG",
      "ACHI-scaffolding.jpg",
      "bb669fda-7456-47ed-8538-8cb6f7c05121.JPG",
      "d2841aa2-85cc-4876-93e8-74bef626072d.JPG",
      "d637ebf9-6943-4b09-9803-bdc9566a0a2f.JPG",
      "db4bbea0-8bdf-4289-93b5-0434c0ab6d3e.JPG",
      "DBAYEH.JPG",
      "DBAYEH.webp",
      "E7AF2CAC-8AC8-43E3-A07E-A510C47FDD96 2.JPG",
      "ef0488ee-3200-4467-b15d-d0a35fc05c97.JPG",
      "Entrance-protection-scaled.jpg",
      "f4b21edb-ec3b-482a-a269-2f778d546614.JPG",
      "Facade-scaffolding-option-1-1.jpg",
      "G1.webp",
      "G10.webp",
      "G11.webp",
      "G12.webp",
      "G13.webp",
      "G14.webp",
      "G15.webp",
      "G16.webp",
      "G17.webp",
      "G18.jpeg",
      "G19.jpeg",
      "G2.webp",
      "G20.jpeg",
      "G3.webp",
      "G4.webp",
      "G5.webp",
      "G6.webp",
      "G7.webp",
      "G8.webp",
      "G9.webp",
      "Hangingscaffolding-1024x768.jpg",
      "Home Banner 1.JPG",
      "Home Banner 4.jpg",
      "Home Banner 5.JPG",
      "Home banner 6.jpg",
      "Home banner 7.JPG",
      "Home banner 8.JPG",
      "IMG_0272.jpg",
      "IMG_0273.jpg",
      "IMG_0274.jpg",
      "IMG_0275.jpg",
      "IMG_2170.JPG",
      "IMG_2172.JPG",
      "IMG_2173.JPG",
      "IMG_2174.JPG",
      "IMG_2175.JPG",
      "IMG_2176.JPG",
      "IMG_2177.JPG",
      "IMG_2178.JPG",
      "IMG_2179.JPG",
      "IMG_2180.JPG",
      "IMG_2181.JPG",
      "IMG_2182.JPG",
      "IMG_2184.JPG",
      "IMG_2185.JPG",
      "IMG_2187.JPG",
      "IMG_2188.JPG",
      "IMG_2191.JPG",
      "IMG_2192.JPG",
      "IMG_2193.JPG",
      "IMG_2194.JPG",
      "IMG_2195.JPG",
      "IMG_2196.JPG",
      "IMG_2197.JPG",
      "IMG_5889.JPG",
      "IMG_5891.JPG",
      "our-mission-1.jpg",
      "Project-4Platform-1024x768.jpg",
      "Projet-3-Saint-George-Hospital-1024x768.jpg",
      "rental-per-piecepg-1-819x1024.jpg",
      "scaffolding for indoor spaces.jpg",
      "Scaffolding installation for renewable energy projects.jpg",
      "SDC10232.JPG",
      "SDC10232.webp",
      "SDC10782.JPG",
      "SDC10782.webp",
      "SDC10964.JPG",
      "SDC10964.webp",
      "SDC13567.JPG",
      "SDC13574.JPG",
      "SDC14423.JPG",
      "SDC14429.JPG",
      "SDC14885.JPG",
      "SDC14885.webp",
      "SDC15653.JPG",
      "SDC15653.webp",
      "SDC15659.JPG",
      "SDC16292.JPG",
      "SDC16292.webp",
      "SDC16336.JPG",
      "SDC16385.JPG",
      "SDC16387.JPG",
      "SDC16389.JPG",
      "SDC16393.JPG",
      "SDC16397.JPG",
      "SDC17576.JPG",
      "SDC17669.JPG",
      "SDC17670.JPG",
      "SDC17890.JPG",
      "SDC17892.JPG",
      "SDC17897.JPG",
      "SDC18801.JPG",
      "SDC18801.webp",
      "SDC18816.JPG",
      "SDC18858.JPG",
      "SDC18990.JPG",
      "SDC19252.JPG",
      "SDC19252.webp",
      "SDC19539.JPG",
      "SDC19889.JPG",
      "SDC19889.webp",
      "WhatsApp Image 2022-11-24 at 9.29.49 PM (2).jpeg",
      "WhatsApp Image 2022-11-24 at 9.29.49 PM.jpeg",
      "WhatsApp Image 2022-11-24 at 9.29.50 PM (1) (1).jpeg",
      "WhatsApp Image 2022-11-24 at 9.30.28 PM.jpeg",
      "WhatsApp Image 2022-11-24 at 9.38.48 PM (3) (1).jpeg",
      "WhatsApp Image 2023-01-05 at 8.25.30 AM.jpeg",
      "WhatsApp Image 2023-01-05 at 9.28.18 AM (5) (1).jpeg",
      "WhatsApp Image 2023-01-05 at 9.28.21 AM.jpeg",
      "WhatsApp Image 2023-01-05 at 9.28.22 AM.jpeg",
    ];

    const base = process.env.PUBLIC_URL || "";
    return files.map((name) => `${base}/assets/gallery/${encodeURIComponent(name)}`);
  }, []);

  const totalPages = Math.ceil(images.length / PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return images.slice(start, end);
  }, [images, currentPage]);

  const scrollToTopOfGallery = () => {
    const section = document.querySelector(".gallery-section");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setLightboxAlt("Project image");
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc("");
    setLightboxAlt("");
  };

  const goToPage = (p) => {
    setCurrentPage(p);
    scrollToTopOfGallery();
  };

  const prev = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  return (
    <>
      <SEO
        title="Gallery | Project Photos & Portfolio | ACHI Scaffolding"
        description="Browse our gallery of scaffolding and shoring projects across Lebanon. See our work in construction, renovation, and industrial projects."
        canonical="https://achi-scaffolding.github.io/gallery"
      />
    <div className="gallery-page" id="gallery">
      <style>{`
        .gallery-page { background-color: var(--bg-odd); min-height: 100vh; }
        .gallery-hero { padding: 70px 0 30px; background: linear-gradient(135deg, #003c8f 0%, #28509e 40%, #4e78c5 100%); color: #fff; }
        .gallery-hero .container { max-width: var(--max-container); margin: 0 auto; padding: 0 16px; }
        .gallery-hero h1 { font-family: "Rajdhani", sans-serif; font-size: 40px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .gallery-hero p { font-size: 15px; opacity: 0.9; }

        .gallery-title-section { padding-top: 60px; padding-bottom: 10px; background: transparent; }
        .gallery-title {
          font-family: "Rajdhani", sans-serif !important;
          font-size: 42px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          margin: 0 0 12px !important;
          color: #003A80 !important;
          text-align: center !important;
          line-height: 1.2 !important;
        }

        .gallery-section { padding: 50px 0 70px; background-color: var(--bg-odd); }
        .gallery-section .container { max-width: var(--max-container); margin: 0 auto; padding: 0 16px; }

        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          background-color: #dfe6f5;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          cursor: zoom-in;
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          animation: galleryFadeUp 0.6s ease forwards;
        }

        .gallery-item:nth-child(3n + 1) { animation-delay: 0.05s; }
        .gallery-item:nth-child(3n + 2) { animation-delay: 0.12s; }
        .gallery-item:nth-child(3n + 3) { animation-delay: 0.18s; }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.35));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover img { transform: scale(1.06); filter: saturate(1.05); }
        .gallery-item:hover::after { opacity: 1; }

        @keyframes galleryFadeUp {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .gallery-pagination {
          margin-top: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .gallery-page-btn,
        .gallery-page-number {
          border: 1px solid #d0d7e6;
          background: #ffffff;
          color: #1f365c;
          font-family: "Rajdhani", sans-serif;
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 999px;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          transition: 0.2s ease;
        }

        .gallery-page-btn[disabled] { opacity: 0.4; cursor: default; }

        .gallery-page-number.active,
        .gallery-page-number:hover,
        .gallery-page-btn:hover:not([disabled]) {
          background: #003c8f;
          color: #ffffff;
          border-color: #003c8f;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .lightbox.open { display: flex; }

        .lightbox-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(7, 15, 31, 0.78);
          backdrop-filter: blur(3px);
        }

        .lightbox-content {
          position: relative;
          z-index: 1;
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
          background: #000;
          animation: lightboxPop 0.25s ease-out;
        }

        .lightbox-content img {
          display: block;
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
        }

        .lightbox-close {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          cursor: pointer;
          font-size: 20px;
          line-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .lightbox-close:hover { background: var(--accent); transform: translateY(-1px); }

        @keyframes lightboxPop {
          from { transform: translateY(10px) scale(0.97); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        @media (max-width: 1024px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .gallery-hero { padding: 60px 0 25px; }
          .gallery-hero h1 { font-size: 32px; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 600px) { .gallery-grid { grid-template-columns: 1fr; } }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .gallery-hero h1 { font-size: 26px; }
          .gallery-hero p { font-size: 14px; }
        }
      `}</style>

      <div className="gallery-title-section">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="gallery-title"
        >
          {t("nav.gallery") || "Gallery"}
        </motion.h1>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid" id="galleryGrid">
            {pageItems.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="gallery-item"
                onClick={() => openLightbox(src)}
              >
                <img loading="lazy" src={src} alt="Project image" />
              </div>
            ))}
          </div>

          {images.length > 0 && (
            <div className="gallery-pagination">
              <button
                type="button"
                className="gallery-page-btn prev"
                onClick={prev}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              <div className="gallery-page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`gallery-page-number ${p === currentPage ? "active" : ""}`}
                    onClick={() => goToPage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="gallery-page-btn next"
                onClick={next}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <div className={`lightbox ${lightboxOpen ? "open" : ""}`} id="gallery-lightbox">
        <div className="lightbox-backdrop" onClick={closeLightbox} />
        <div className="lightbox-content">
          <button type="button" className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          <img src={lightboxSrc} alt={lightboxAlt} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Gallery;
