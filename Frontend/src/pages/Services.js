import React from 'react';
import { motion } from "framer-motion";
import ServicesPageAllServices from '../components/services/ServicesPageAllServices';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <div id='ServicesPage'>
      <SEO
        title="Services | Scaffolding & Shoring Solutions | ACHI"
        description="ACHI Scaffolding offers comprehensive scaffolding, shoring, and access system services for construction, renovation, and industrial projects across Lebanon."
        canonical="https://achi-scaffolding.github.io/services"
      />
      <section className="relative bg-servicePageBanner bg-no-repeat bg-cover bg-center pt-[110px] pb-[200px] md:pt-[130px] md:pb-[240px]">
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative max-w-[1250px] mx-auto px-[20px]"
        >
          <h1 className="font-[Rajdhani] text-white text-[55px] md:text-[55px] font-[700] uppercase leading-[0.95]">
            Services
          </h1>

          <p className="text-white/90 font-['Open_Sans'] text-[16px] md:text-[17px] leading-[1.7] max-w-[650px] mt-[12px]">
            We offer a complete range of scaffolding, shoring and related services for safe and efficient projects.
          </p>

          <div className="mt-[28px]">
           <a
  href="https://wa.me/+96103322811"
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-fit px-[28px] sm:px-[34px]
             text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px]
             text-white font-saira font-[700] leading-[29px]
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

      <ServicesPageAllServices />
    </div>
  );
};

export default Services;
