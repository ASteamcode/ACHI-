import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StatsHighlights from "../components/StatsHighlights";
import SEO from "../components/SEO";

const About = () => {
  return (
    <main className="about-page">
      <SEO
        title="About Us | ACHI Scaffolding"
        description="Learn about ACHI Scaffolding, Lebanon's trusted scaffolding and shoring solutions provider since 1993. Expert team, quality equipment, and professional service."
        canonical="https://achi-scaffolding.github.io/about"
      />
      <section className="home-about w-full p-0 m-0">
        <div className="about-layout grid grid-cols-1 lg:grid-cols-2 items-stretch w-full lg:h-[520px]">
          <div
            className="about-image min-h-[260px] lg:min-h-[480px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/about.webp')" }}
            aria-label="Achi Scaffolding about hero image"
            role="img"
          />

          <div className="about-panel bg-[#274f9f] text-white px-[20px] py-[28px] lg:px-[70px] lg:py-[70px] flex flex-col justify-center relative">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="section-title about-title"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: "42px",
                fontWeight: 700,
                textTransform: "uppercase",
                margin: "0 0 12px",
                color: "#ffffff",
                lineHeight: "1.2",
              }}
            >
              30+ YEARS OF SCAFFOLDING
              <br />
              EXPERIENCE
            </motion.h2>

            <div className="about-panel-copy">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="font-['Open_Sans'] text-white/90 text-[16px] leading-[1.6] max-w-[640px]"
              >
                Since its establishment in 1993 by engineer Barbar Achi, Achi
                Scaffolding has evolved into a reputable provider of expert
                scaffolding and formwork services in Lebanon. Our professional
                team takes immense pride in building a solid foundation of trust
                by delivering reliable and high-quality scaffold structures for
                diverse projects, including shopping malls, towers, residential
                buildings, and universities.
              </motion.p>
            </div>

            <span className="hidden lg:block absolute right-[24px] top-[30px] w-[6px] h-[64px] bg-[#1b3a73]" />
          </div>
        </div>
      </section>

      <section id="about-main" className="about-main bg-white pt-[90px] pb-0">
        <div className="w-[90%] max-w-[980px] mx-auto">
          <div className="about-intro">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="about-hero-title text-[#214f9b] uppercase"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: "42px",
                fontWeight: 700,
                textTransform: "uppercase",
                margin: "0 0 12px",
                lineHeight: "1.2",
              }}
            >
              ABOUT ACHI SCAFFOLDING
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[#4a5c7a] text-[16px] leading-[1.7] mt-[10px]"
            >
              Achi Scaffolding provides professional scaffolding, formwork and
              shoring solutions for commercial, residential and industrial
              projects across Lebanon and the region. We combine field experience
              with engineered solutions to deliver safe, reliable and
              cost-effective systems.
            </motion.p>
          </div>

          <div className="grid-2 grid grid-cols-1 lg:grid-cols-2 gap-[28px] mt-[40px]">
            <article className="card bg-white rounded-[16px] p-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <h3
                className="about-subtitle text-[#214f9b]"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: "22px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                OUR MISSION
              </h3>

              <p className="text-[#4a5c7a] leading-[1.6]">
                We specialize in comprehensive scaffolding services — from rental
                and installation to design and export of new and used
                construction equipment across the Middle East and Africa. Our
                mission is to provide engineered, safe and timely solutions that
                help clients deliver their projects on schedule.
              </p>

              <div className="mt-[22px] flex justify-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-[34px] py-[12px] rounded-[40px] border-[2px] border-[#214f9b] text-[#214f9b] font-[600] uppercase text-[15px] font-['Rajdhani'] hover:bg-[#214f9b] hover:text-white transition"
                >
                  See projects
                </Link>
              </div>
            </article>

            <article className="card bg-white rounded-[16px] p-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <h3
                className="about-subtitle text-[#214f9b]"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: "22px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                OUR VISION
              </h3>

              <p className="text-[#4a5c7a] leading-[1.6]">
                To make scaffolding a symbol of innovation, sustainability and
                safety in the built environment. We aim to lead the industry by
                improving standards, investing in skilled crews and supplying
                modern systems that reduce risk and increase productivity.
              </p>

              <div className="mt-[22px] flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-[34px] py-[12px] rounded-[40px] border-[2px] border-[#214f9b] text-[#214f9b] font-[600] uppercase text-[15px] font-['Rajdhani'] hover:bg-[#214f9b] hover:text-white transition"
                >
                  Get in touch
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Moved from Services page: Happy Clients / Years of experience / Awards winning / Consultations */}
      <StatsHighlights className="py-[90px]" />
    </main>
  );
};

export default About;
