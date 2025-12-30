// src/pages/Projects.js
import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import SEO from "../components/SEO"

const MODAL_GALLERY_STYLE = { columnCount: 3, columnGap: 16 }

const MODAL_IMAGE_STYLE = {
  width: "100%",
  height: "auto",
  margin: "0 0 16px",
  display: "block",
  borderRadius: 12,
  objectFit: "contain",
  background: "#f5f5f5",
  breakInside: "avoid",
}

const Projects = () => {
  const [activeId, setActiveId] = useState(null)

  const base = process.env.PUBLIC_URL || ""

  const projects = useMemo(
    () => [
      {
        id: "aishti-mall",
        title: "AISHTI Mall",
        img: `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/IMG_2189.JPG`,
        desc: "Full scaffolding for interior and exterior works during construction at AISHTI Mall, one of the most iconic luxury retail developments in Lebanon.",
        tags: ["Large-Scale", "Retail", "Antelias, Lebanon"],
        gallery: [
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/0W0A1218.JPG`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/0W0A1226 2.JPG`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/edit.JPG`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/Home Banner 5.JPG`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/Home banner 6.jpg`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/IMG_2189.JPG`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/Project-4Platform-1024x768.jpg`,
          `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/scaffolding for indoor spaces.jpg`,
        ],
      },
      {
        id: "port-side-residential",
        title: "Port Side Residential Towers",
        img: `${base}/assets/workDone/PORT SIDE - BEIRUT/361641065_768035905323121_6701313797518833287_n.jpg`,
        desc: "Full scaffolding during structural works and façade completion at Port Side Residential Towers in the Beirut Port Area.",
        tags: ["High-Rise", "Residential", "Beirut Port, Lebanon"],
        gallery: [
          `${base}/assets/workDone/PORT SIDE - BEIRUT/361641065_768035905323121_6701313797518833287_n.jpg`,
          `${base}/assets/workDone/PORT SIDE - BEIRUT/Home Banner 3.jpg`,
        ],
      },
      {
        id: "beirut-business-center",
        title: "Beirut Business Center",
        img: `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17897.JPG`,
        desc: "External and internal scaffolding for a commercial tower in Beirut, supporting structural works and façade completion.",
        tags: ["Commercial", "High-Rise", "Beirut, Lebanon"],
        gallery: [
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/Home banner 2.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17893.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17897.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17898.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17899 copy.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17899.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17900.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17901.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC19484.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC19485.JPG`,
          `${base}/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC19487.JPG`,
        ],
      },
      {
        id: "hotel-le-gray",
        title: "Hotel Le Gray",
        img: `${base}/assets/workDone/HOTEL LE GRAY/IMG_2186.JPG`,
        desc: "External scaffolding for façade maintenance and restoration at Hotel Le Gray, located in downtown Beirut.",
        tags: ["Luxury", "Hotel", "Beirut, Lebanon"],
        gallery: [`${base}/assets/workDone/HOTEL LE GRAY/IMG_2186.JPG`],
      },
      {
        id: "hotel-albergo",
        title: "Hotel Albergo",
        img: `${base}/assets/workDone/HOTEL ALBERGO/IMG_2197.JPG`,
        desc: "External scaffolding for façade restoration and architectural detailing at Hotel Albergo in Achrafieh.",
        tags: ["Heritage", "Boutique Hotel", "Achrafieh, Beirut"],
        gallery: [`${base}/assets/workDone/HOTEL ALBERGO/IMG_2197.JPG`],
      },
      {
        id: "abc-mall",
        title: "ABC Mall",
        img: `${base}/assets/workDone/ABC MALL/473737fb-1e48-40f4-ab29-ad87f1939d51.JPG`,
        desc: "Comprehensive scaffolding solutions for façade and interior works at ABC Mall, serving retail fit-out and maintenance operations.",
        tags: ["Retail", "Large-Scale", "Lebanon"],
        gallery: [
          `${base}/assets/workDone/ABC MALL/473737fb-1e48-40f4-ab29-ad87f1939d51.JPG`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (1).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (2).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (3).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30 (4).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.30.jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (1).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (2).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (3).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (4).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (5).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (6).jpeg`,
          `${base}/assets/workDone/ABC MALL/WhatsApp Image 2025-01-24 at 19.10.32 (7).jpeg`,
        ],
      },
      {
        id: "be-batroun",
        title: "Be Batroun",
        img: `${base}/assets/workDone/BE BATROUN/IMG_2183.JPG`,
        desc: "Scaffolding installation for residential works in Batroun, supporting façade and structural activities.",
        tags: ["Residential", "Coastal", "Batroun, Lebanon"],
        gallery: [`${base}/assets/workDone/BE BATROUN/IMG_2183.JPG`],
      },
      {
        id: "centre-sofil",
        title: "Centre Sofil",
        img: `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 10.JPG`,
        desc: "Scaffolding for multi-level works at Centre Sofil, enabling safe access for façade and maintenance operations.",
        tags: ["Commercial", "Mixed-Use", "Beirut, Lebanon"],
        gallery: [
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 10.JPG`,
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 9.JPG`,
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/722ef18b-3708-430b-a8e9-dc891928aaff 10.JPG`,
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/722ef18b-3708-430b-a8e9-dc891928aaff 9.JPG`,
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/8a182148-5e14-4ece-a93a-22ce7f354075 10.JPG`,
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/8a182148-5e14-4ece-a93a-22ce7f354075 9.JPG`,
          `${base}/assets/workDone/CENTRE SOFIL - BEIRUT/Centre sofil.zip - 1.PNG`,
        ],
      },
      {
        id: "credit-libanais-hq",
        title: "Credit Libanais Headquarters",
        img: `${base}/assets/workDone/CREDIT LIBANAIS HQ/62D2606F-BB19-47A1-85BA-E2B0DC8C7FCC.JPG`,
        desc: "Scaffolding systems for façade works and technical interventions at Credit Libanais headquarters.",
        tags: ["Corporate", "High-Rise", "Lebanon"],
        gallery: [
          `${base}/assets/workDone/CREDIT LIBANAIS HQ/62D2606F-BB19-47A1-85BA-E2B0DC8C7FCC.JPG`,
          `${base}/assets/workDone/CREDIT LIBANAIS HQ/E7AF2CAC-8AC8-43E3-A07E-A510C47FDD96.JPG`,
        ],
      },
      {
        id: "damac-towers",
        title: "Damac Towers",
        img: `${base}/assets/workDone/DAMAC TOWERS/0f274807-0f97-472e-a538-ef3b51de2f96.JPG`,
        desc: "High-rise scaffolding for structural construction and façade works at Damac Towers.",
        tags: ["High-Rise", "Residential", "Towers"],
        gallery: [
          `${base}/assets/workDone/DAMAC TOWERS/0f274807-0f97-472e-a538-ef3b51de2f96.JPG`,
          `${base}/assets/workDone/DAMAC TOWERS/8dae2217-585a-4bb7-a80f-d4d2bff99e70.JPG`,
          `${base}/assets/workDone/DAMAC TOWERS/9c9d3d26-4d69-43ab-a147-d543da02d39c.JPG`,
          `${base}/assets/workDone/DAMAC TOWERS/c9753dec-5328-4f0d-87f8-cff0712f05ea.JPG`,
        ],
      },
      {
        id: "embassy-france",
        title: "Embassy of France",
        img: `${base}/assets/workDone/EMBASSY OF FRANCE/IMG_2198.JPG`,
        desc: "Scaffolding for restoration and maintenance works at the Embassy of France.",
        tags: ["Institutional", "Restoration", "Beirut, Lebanon"],
        gallery: [`${base}/assets/workDone/EMBASSY OF FRANCE/IMG_2198.JPG`],
      },
      {
        id: "gema-center",
        title: "Gema Center",
        img: `${base}/assets/workDone/GEMA CENTER/ed113f0d-c0ba-4642-b7c5-713530034d03 2.JPG`,
        desc: "Scaffolding access for commercial and technical works at Gema Center.",
        tags: ["Commercial", "Access", "Lebanon"],
        gallery: [`${base}/assets/workDone/GEMA CENTER/ed113f0d-c0ba-4642-b7c5-713530034d03 2.JPG`],
      },
      {
        id: "hopital-saint-georges",
        title: "Saint Georges Hospital",
        img: `${base}/assets/workDone/HOPITAL SAINT GEORGES/Projet-3-Saint-George-Hospital-1024x768.jpg`,
        desc: "Scaffolding systems for hospital façades and structural works at Saint Georges Hospital.",
        tags: ["Healthcare", "Institutional", "Lebanon"],
        gallery: [`${base}/assets/workDone/HOPITAL SAINT GEORGES/Projet-3-Saint-George-Hospital-1024x768.jpg`],
      },
      {
        id: "ndu-barsa",
        title: "NDU Barsa Campus",
        img: `${base}/assets/workDone/NDU BARSA/Centre sofil.zip - 7.PNG`,
        desc: "Scaffolding for educational building works at the NDU Barsa campus.",
        tags: ["Education", "Campus", "Barsa, Lebanon"],
        gallery: [`${base}/assets/workDone/NDU BARSA/Centre sofil.zip - 7.PNG`],
      },
      {
        id: "villa-audi",
        title: "Villa Audi",
        img: `${base}/assets/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 4.PNG`,
        desc: "Scaffolding for heritage restoration works at Villa Audi in Beirut.",
        tags: ["Heritage", "Restoration", "Beirut, Lebanon"],
        gallery: [
          `${base}/assets/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 15.PNG`,
          `${base}/assets/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 4.PNG`,
        ],
      },
    ],
    [base]
  )

  const heroBg = `${base}/assets/workDone/AISHTI MALL - JAL EL DIB/edit.JPG`

  const heroStyle = useMemo(
    () => ({ backgroundImage: `url("${heroBg}")` }),
    [heroBg]
  )

  const activeProject = projects.find((p) => p.id === activeId) || null

  useEffect(() => {
    if (!activeProject) return
    activeProject.gallery.forEach((src) => {
      const img = new Image()
      img.decoding = "async"
      img.fetchPriority = "high"
      img.src = src
    })
  }, [activeProject])

  useEffect(() => {
    if (!activeProject) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeProject])

  return (
    <main className="bg-[#f5f7fb] text-[#1b3155]">
      <SEO
        title="Projects | Our Work Portfolio | ACHI Scaffolding"
        description="Explore ACHI Scaffolding's portfolio of successful scaffolding and shoring projects across Lebanon. Construction, renovation, and industrial projects."
        canonical="https://achi-scaffolding.github.io/projects"
      />
    <section
  className="relative bg-no-repeat bg-cover bg-center"
  style={heroStyle}
>
  <div className="absolute inset-0 z-0 bg-[rgba(0,35,90,0.55)] backdrop-brightness-[0.9]"></div>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    className="relative z-10 w-full h-full flex flex-col justify-center text-left
               pt-[110px] pb-[200px] md:pt-[130px] md:pb-[240px]
               pl-[20px] md:pl-[70px] pr-[20px]"
  >
    <h1 className="font-[Rajdhani] text-white text-[28px] md:text-[42px] font-[700] uppercase mb-[12px]">
      Projects
    </h1>

    <p className="text-white/90 font-['Open_Sans'] text-[16px] md:text-[17px] leading-[1.7] max-w-[650px]">
      Discover a selection of our completed projects and scaffolding installations across Lebanon and beyond.
    </p>

    <div className="mt-[28px]">
      <a
        href="https://wa.me/+96103322811"
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit px-[28px] sm:px-[34px]
                   text-[12px] md:text-[15px]
                   text-white font-[Rajdhani] font-[700] leading-[29px]
                   py-[15px]
                   bg-[#28509E] rounded-[12px] uppercase
                   hover:bg-[#25D366]
                   border-[#FFF] hover:border-[#25D366]
                   border-solid border-2
                   transition duration-500 heroBtn"
      >
        send enquiry over whatsapp
      </a>
    </div>
  </motion.div>
</section>


      <section className="py-[50px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-center font-[Rajdhani] text-[#003A80] text-[32px] md:text-[42px] font-[700] uppercase leading-[1.2]">
            All Projects
          </h2>

          <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={p.img}
                  alt={`${p.title} Project Image`}
                  className="w-full h-[270px] object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="p-[20px] md:p-[22px]">
                  <h3 className="font-[Rajdhani] text-[#214f9b] text-[20px] font-[700] m-0">
                    {p.title}
                  </h3>

                  <p className="mt-[10px] font-['Open_Sans'] text-[#4a5c7a] text-[14px] leading-[1.5] mb-[16px]">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-[10px] mb-[16px]">
                    {p.tags.map((tag) => (
                      <span
                        key={`${p.id}-${tag}`}
                        className="bg-[#eaf2ff] text-[#1d4fa2] px-[14px] py-[5px] rounded-[20px] text-[12px] uppercase font-[Rajdhani]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex md:block">
                    <button
                      type="button"
                      onClick={() => setActiveId(p.id)}
                      className="inline-block font-[Rajdhani] uppercase text-[14px] font-[700]
                                 text-[#214f9b] border-2 border-[#214f9b]
                                 px-[18px] py-[6px] rounded-[30px]
                                 transition duration-300 hover:bg-[#214f9b] hover:text-white
                                 mx-auto md:mx-0"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-[50px] text-center">
        <div className="inline-flex items-center gap-[18px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home.png`}
            alt="Home Icon"
            className="w-[60px] h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col items-start leading-[1.1] mt-[6px]">
            <div className="font-[Rajdhani] text-[45px] font-[700] text-[#103781] ml-[10px]">
              1036
            </div>
            <div className="font-[Rajdhani] text-[30px] font-[700] text-[#103781] mt-[4px] tracking-[0.5px]">
              Projects
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#214f9b] py-[70px] text-white">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[40px]">
          <h2 className="font-[Rajdhani] text-[32px] md:text-[42px] font-[700] uppercase leading-[1.2] text-center">
            Subscribe to our <br /> newsletter
          </h2>

          <form
            className="flex flex-col md:flex-row items-center gap-[20px] w-full lg:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="w-full md:w-[380px] px-[18px] py-[14px] rounded-[8px] border border-white/40 bg-transparent text-white text-[15px] outline-none"
              placeholder="Email"
            />
            <button
              type="submit"
              className="px-[34px] py-[14px] bg-[#ff8a00] rounded-[8px] text-white font-[Rajdhani] font-[700] text-[15px] uppercase transition hover:bg-[#e77a00] w-full md:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-[99999999] bg-black/70 overflow-y-auto"
          onClick={() => setActiveId(null)}
        >
          <div className="min-h-full flex items-start justify-center px-[14px] py-[30px]">
            <div
              className="bg-white w-full max-w-[1100px] rounded-[18px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-[999] bg-white border-b border-[#eef3fb] px-[18px] py-[14px] flex items-center justify-between">
                <h3 className="font-[Rajdhani] text-[#214f9b] text-[20px] md:text-[28px] font-[700] m-0">
                  {activeProject.title}
                </h3>

                <button
                  type="button"
                  className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full border-2 border-[#214f9b] text-[#214f9b] font-[900] text-[24px] hover:bg-[#214f9b] hover:text-white transition"
                  onClick={() => setActiveId(null)}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              <div className="p-[16px]">
                <div className="modal-gallery" style={MODAL_GALLERY_STYLE}>
                  {activeProject.gallery.map((src, index) => (
                    <img
                      key={`${activeProject.id}-${index}`}
                      src={src}
                      alt={`${activeProject.title} image`}
                      style={MODAL_IMAGE_STYLE}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Projects
