import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sectors } from "../data/sectors";

const sectorIcons = {
  "Renovation": "fa-hammer",
  "Domes & Religious Structures": "fa-church",
  "Construction": "fa-building",
  "Events & Installations": "fa-calendar-check",
  "Industrial Facilities": "fa-industry",
  "Oil & Gas Sites": "fa-fire-flame-simple",
  "Naval & Marine Projects": "fa-ship",
};

const SectorsBar = () => {
  return (
    <section
      id="sectors-bar"
      className="py-[70px] bg-[#f5f7fb]"
      aria-labelledby="sectors-bar-title"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <motion.h2
          id="sectors-bar-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[40px] text-[#003A80] text-center"
        >
          SECTORS
        </motion.h2>

        <p className="sr-only">
          Explore the sectors ACHI Scaffolding serves with industrial and construction scaffolding systems, access solutions, and execution-ready support for complex projects.
        </p>

        <div className="relative">
          <ul className="hidden md:flex flex-nowrap gap-[16px] lg:gap-[20px]" aria-label="Sectors list">
            {sectors.map((sector, idx) => (
              <motion.li
                key={sector.title || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 min-w-0 list-none"
              >
                <Link
                  to="/sectors"
                  className="group block bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[28px] h-full flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-[4px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#214f9b] focus:ring-offset-2"
                  aria-label={`Explore ${sector.title} sector scaffolding solutions`}
                  title={`Explore ${sector.title} sector`}
                >
                  <div className="mb-[16px] w-[64px] h-[64px] flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fa-solid ${sectorIcons[sector.title] || "fa-building"} text-[#214f9b] text-[40px] group-hover:text-[#ff8e26] group-hover:scale-110 transition-all duration-300`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-[Rajdhani] text-[#214f9b] text-[16px] md:text-[17px] font-[600] uppercase leading-[1.3] group-hover:text-[#ff8e26] transition-colors duration-300">
                    {sector.title}
                  </h3>
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="md:hidden overflow-x-auto scrollbar-hide pb-[10px] -mx-[20px] px-[20px]">
            <ul className="flex flex-nowrap gap-[16px]" aria-label="Sectors list">
              {sectors.map((sector, idx) => (
                <motion.li
                  key={sector.title || idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[160px] list-none"
                >
                  <Link
                    to="/sectors"
                    className="group block bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[24px] h-full flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#214f9b] focus:ring-offset-2"
                    aria-label={`Explore ${sector.title} sector scaffolding solutions`}
                    title={`Explore ${sector.title} sector`}
                  >
                    <div className="mb-[12px] w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <i
                        className={`fa-solid ${sectorIcons[sector.title] || "fa-building"} text-[#214f9b] text-[36px] group-hover:text-[#ff8e26] group-hover:scale-110 transition-all duration-300`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-[Rajdhani] text-[#214f9b] text-[14px] font-[600] uppercase leading-[1.3] group-hover:text-[#ff8e26] transition-colors duration-300">
                      {sector.title}
                    </h3>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsBar;
