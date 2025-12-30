// src/pages/Sectors.js
import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { sectors } from "../data/sectors"
import SEO from "../components/SEO"

const Sectors = () => {
  return (
    <main id="sectors" className="bg-[#f5f7fb] text-[#1b3155]">
      <SEO
        title="Industries Served | Scaffolding Sectors | ACHI Scaffolding"
        description="ACHI Scaffolding is an industrial and construction scaffolding contractor and equipment provider delivering access systems, shoring, and scaffolding solutions for restoration, infrastructure, and complex building projects."
        canonical="https://achi-scaffolding.github.io/sectors"
      />

      <section className="py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[18px] shadow-[0_10px_30px_rgba(17,35,64,0.08)] px-[22px] md:px-[38px] py-[28px] md:py-[34px]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#214f9b] font-[900] uppercase text-[30px] md:text-[40px] leading-[1.1] text-center md:text-center"
            >
              Industries Served
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-[12px] text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.8] max-w-[980px] text-center md:text-left"
            >
              ACHI Scaffolding is an industrial and construction scaffolding contractor and equipment provider delivering access systems, shoring, and scaffolding solutions for restoration, infrastructure, and complex building projects.
            </motion.p>

            <div className="mt-[18px] grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              <div className="flex items-start gap-[10px]">
                <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#214f9b]" />
                <p className="text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7]">
                  Construction & general contracting
                </p>
              </div>

              <div className="flex items-start gap-[10px]">
                <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#214f9b]" />
                <p className="text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7]">
                  Building restoration & renovation
                </p>
              </div>

              <div className="flex items-start gap-[10px]">
                <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#214f9b]" />
                <p className="text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7]">
                  Industrial facilities & plants
                </p>
              </div>

              <div className="flex items-start gap-[10px]">
                <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#214f9b]" />
                <p className="text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7]">
                  Residential and commercial developments
                </p>
              </div>
            </div>

           <div className="sr-only" aria-hidden="false">
            <Link to="/products">View Scaffolding Products</Link>
            <Link to="/projects">Explore Project Experience</Link>
            <Link to="/services">Learn About Scaffolding Systems</Link>
           </div>

          </div>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {sectors.map((sector, idx) => (
              <motion.article
                key={`${sector.title}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[32px] flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <h2 className="font-[Rajdhani] text-[#214f9b] text-[24px] md:text-[26px] font-[700] uppercase mb-[16px]">
                  {sector.title}
                </h2>
                <p className="font-['Open_Sans'] text-[#4a5c7a] text-[15px] leading-[1.7] flex-1">
                  {sector.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[55px] bg-[#eef3fb]">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-[#214f9b] font-[900] uppercase text-[22px] md:text-[28px]">
              Need Scaffolding Solutions for Your Sector?
            </h2>
            <p className="mt-[8px] text-[#4a5c7a] text-[14px] leading-[1.7]">
              Share your project requirements and we’ll recommend the right access system, shoring approach, or scaffolding solution for your site conditions.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            href="https://wa.me/96103322811"
            target="_blank"
            rel="noreferrer"
            aria-label="Request scaffolding information or technical support over WhatsApp"
            className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-[12px] bg-[#28509E] text-white font-[900] uppercase text-[13px] border-2 border-white hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            Send us your enquiry over WhatsApp
          </motion.a>
        </div>
      </section>
    </main>
  )
}

export default Sectors
