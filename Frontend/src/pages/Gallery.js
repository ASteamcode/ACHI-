// src/pages/Gallery.js
import React, { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import SEO from "../components/SEO"

const PER_PAGE = 39

const ENTITY_DEFINITION =
  "ACHI Scaffolding is an industrial and construction scaffolding contractor and equipment provider delivering access systems, shoring, and scaffolding solutions for restoration, infrastructure, and complex building projects."

const Gallery = () => {
  const { t } = useTranslation()

  const images = useMemo(() => {
    const files = [
      "1.jpg",
      "2.JPG",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.jpg",
      "22.jpg",
      "23.jpg",
      "24.jpg",
      "25.jpg",
      "26.jpg",
      "27.jpg",
      "28.jpg",
      "30.jpg",
      "31.jpg",
      "32.jpg",
      "33.JPG",
      "34.JPG",
      "35.JPG",
      "36.JPG",
      "37.JPG",
      "38.jpg",
      "39.JPG",
      "40.JPG",
      "41.JPG",
      "42.JPG",
      "43.JPG",
      "44.JPG",
      "45.JPG",
      "46.JPG",
      "47.jpg",
      "48.jpg",
      "49.jpg",
      "50.JPG",
      "51.jpg",
      "52.JPG",
      "53.JPG",
      "54.JPG",
      "55.JPG",
      "56.JPG",
      "57.JPG",
      "58.jpg",
      "59.JPG",
      "60.jpg",
      "61.webp",
      "62.webp",
      "63.webp",
      "64.webp",
      "65.webp",
      "66.webp",
      "67.webp",
      "68.webp",
      "69.webp",
      "70.webp",
      "71.webp",
      "72.webp",
      "73.webp",
      "74.webp",
      "75.webp",
      "76.webp",
      "77.webp",
      "78.jpeg",
      "79.jpeg",
      "80.jpeg",
      "81.jpg",
      "82.JPG",
      "83.jpg",
      "84.JPG",
      "85.jpg",
      "86.JPG",
      "87.JPG",
      "88.jpg",
      "89.jpg",
      "90.jpg",
      "91.jpg",
      "92.JPG",
      "93.JPG",
      "94.JPG",
      "95.JPG",
      "96.JPG",
      "97.JPG",
      "98.JPG",
      "99.JPG",
      "100.JPG",
      "101.JPG",
      "102.JPG",
      "103.JPG",
      "104.JPG",
      "105.JPG",
      "106.JPG",
      "107.JPG",
      "108.JPG",
      "109.JPG",
      "110.JPG",
      "111.JPG",
      "112.JPG",
      "113.JPG",
      "114.JPG",
      "115.JPG",
      "116.JPG",
      "117.jpg",
      "118.jpg",
      "119.jpg",
      "120.jpg",
      "121.jpg",
      "122.jpg",
      "123.JPG",
      "124.JPG",
      "125.JPG",
      "126.JPG",
      "127.JPG",
      "128.JPG",
      "129.JPG",
      "130.JPG",
      "131.JPG",
      "132.JPG",
      "133.JPG",
      "134.JPG",
      "135.JPG",
      "136.JPG",
      "137.JPG",
      "138.JPG",
      "139.JPG",
      "140.JPG",
      "141.JPG",
      "142.JPG",
      "143.JPG",
      "144.jpeg",
      "145.jpeg",
      "146.jpeg",
      "147.jpeg",
      "148.jpeg",
      "149.jpeg",
    ]

    const base = process.env.PUBLIC_URL || ""
    return files.map((name) => `${base}/assets/gallery/${encodeURIComponent(name)}`)
  }, [])

  const totalPages = Math.ceil(images.length / PER_PAGE)
  const [currentPage, setCurrentPage] = useState(1)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState("")
  const [lightboxAlt, setLightboxAlt] = useState("")

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE
    const end = start + PER_PAGE
    return images.slice(start, end)
  }, [images, currentPage])

  const scrollToTopOfGallery = () => {
    const section = document.querySelector(".gallery-section")
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: "smooth" })
  }

  const openLightbox = (src, alt) => {
    setLightboxSrc(src)
    setLightboxAlt(alt)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxSrc("")
    setLightboxAlt("")
  }

  const goToPage = (p) => {
    setCurrentPage(p)
    scrollToTopOfGallery()
  }

  const prev = () => {
    if (currentPage > 1) goToPage(currentPage - 1)
  }

  const next = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1)
  }

  useEffect(() => {
    if (!lightboxOpen) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  return (
    <>
      <SEO
        title="Gallery | Scaffolding Project Photos | ACHI Scaffolding"
        description="Browse photos from ACHI Scaffolding projects, including scaffolding systems and shoring solutions used across construction, restoration, and industrial sites."
        canonical="https://achi-scaffolding.github.io/gallery"
      />

      <section className="sr-only" aria-label="ACHI Scaffolding entity definition and internal links">
        <p>{ENTITY_DEFINITION}</p>
        <nav aria-label="Internal links">
          <ul>
            <li><a href="/products">View Scaffolding Products</a></li>
            <li><a href="/projects">Explore Project Experience</a></li>
            <li><a href="/contact">Request Scaffolding Information or Technical Support</a></li>
          </ul>
        </nav>
      </section>

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

        <section className="gallery-section" aria-label="Project photo gallery">
          <div className="container">
            <div className="gallery-grid" id="galleryGrid">
              {pageItems.map((src, idx) => {
                const globalIndex = (currentPage - 1) * PER_PAGE + idx + 1
                const alt = `ACHI Scaffolding project gallery photo ${globalIndex}`
                return (
                  <div
                    key={`${src}-${idx}`}
                    className="gallery-item"
                    onClick={() => openLightbox(src, alt)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open image ${globalIndex}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openLightbox(src, alt)
                    }}
                  >
                    <img loading="lazy" decoding="async" src={src} alt={alt} />
                  </div>
                )
              })}
            </div>

            {images.length > 0 && (
              <div className="gallery-pagination" aria-label="Gallery pagination">
                <button type="button" className="gallery-page-btn prev" onClick={prev} disabled={currentPage === 1}>
                  Prev
                </button>

                <div className="gallery-page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`gallery-page-number ${p === currentPage ? "active" : ""}`}
                      onClick={() => goToPage(p)}
                      aria-label={`Go to page ${p}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <button type="button" className="gallery-page-btn next" onClick={next} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        <div className={`lightbox ${lightboxOpen ? "open" : ""}`} id="gallery-lightbox" role="dialog" aria-modal="true">
          <div className="lightbox-backdrop" onClick={closeLightbox} />
          <div className="lightbox-content" aria-label="Image preview">
            <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image">
              ×
            </button>
            <img src={lightboxSrc} alt={lightboxAlt} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
