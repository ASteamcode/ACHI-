import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWebp from "../ImageWebp";
import ContactForm from "../ContactForm";
import SEO from "../SEO";

const SingleService = () => {
  return (
    <div className="w-full">
      <SEO
        title="Service Details | ACHI Scaffolding"
        description="Learn more about our scaffolding and shoring services. Contact us for a consultation."
        canonical="https://achi-scaffolding.github.io/services/serviceItem"
      />
      {/* HERO */}
      <section className="w-full bg-[#28509E] flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 px-[20px] md:px-[80px] py-[90px] md:py-[0]">
          <div className="font-[Rajdhani] text-[20px] tracking-[3px] font-[700] text-white mb-[12px]">
            SERVICES
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-[Rajdhani] text-white font-[700] uppercase 
                       text-[28px] md:text-[42px] 
                       leading-[1.15] mb-[12px] max-w-[650px]"
          >
            Installation and Rental of scaffolding for facades
          </motion.h1>
        </div>

        <div className="w-full md:w-1/2 hidden md:block">
          <ImageWebp
            srcWebp="/assets/services/361641065_768035905323121_6701313797518833287_n 2(3).png"
            src="/assets/services/361641065_768035905323121_6701313797518833287_n 2(3).png"
            alt="Scaffolding for facades"
            className="w-full h-full object-cover max-h-[420px]"
          />
        </div>

        <div className="w-full md:hidden">
          <ImageWebp
            srcWebp="/assets/services/Group 49214.png"
            src="/assets/services/Group 49214.png"
            alt="Scaffolding for facades"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* SERVICE CONTENT */}
      <section className="w-full py-[70px]">
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
            <div className="rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <ImageWebp
                srcWebp="/assets/services/Suspended scaffolding 1 2(2).png"
                src="/assets/services/Suspended scaffolding 1 2(2).png"
                alt="Scaffolding for facades"
                className="w-full h-[260px] md:h-[420px] object-cover"
              />
            </div>

            <div>
              <h2
                className="font-[Rajdhani] font-[700] uppercase 
                           text-[28px] md:text-[42px] 
                           mb-[12px] text-[#003A80]"
              >
                Category 1
              </h2>

              <p className="font-[Open_Sans] text-[15px] md:text-[16px] leading-[1.9] text-black">
                Lebanon&apos;s rich history and architectural heritage have significantly influenced the development of
                scaffolding practices in the country. From ancient construction techniques to modern-day engineering
                marvels, the evolution of scaffolding in Lebanon mirrors the nation&apos;s journey through time.
              </p>

              <Link  to="/services"  className="inline-flex items-center justify-center
             h-[44px] px-[24px]  mt-[24px]
             font-[Rajdhani] font-[700] uppercase tracking-[1px]
             bg-[#003A80] text-white rounded-[10px]
             hover:bg-[#28509E] transition">  Other Services
             </Link>

            </div>
          </div>
        </div>
      </section>

      <ContactForm decreaseMargin={true} />
    </div>
  );
};

export default SingleService;
