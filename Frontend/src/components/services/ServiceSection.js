import React from "react"
import { motion } from "framer-motion"
import ImageWebp from "../ImageWebp"
import { Link } from "react-router-dom"

const ServiceSection = () => {
  const ASSET = process.env.PUBLIC_URL || ""

  const services = [
    {
      id: "facade-scaffolding",
      title: "Installation and rental of scaffolding for facades",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png`,
      alt: "Scaffolding installation and rental for building facades",
      to: "/services/serviceItem",
    },
    {
      id: "suspended-scaffolding",
      title: "Installation and rental of suspended scaffolding",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/Suspended scaffolding 1 2(1).png`,
      alt: "Suspended scaffolding installation and rental service",
      to: "/services/serviceItem",
    },
    {
      id: "propping-shoring",
      title: "Propping and shoring systems",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/SDC14429(1).png`,
      alt: "Propping and shoring systems for structural support",
      to: "/services/serviceItem",
    },
    {
      id: "indoor-scaffolding",
      title: "Installation and rental of scaffolding for indoor spaces",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/Home Banner 4 2(1).png`,
      alt: "Indoor scaffolding installation and rental for interior work",
      to: "/services/serviceItem",
    },
    {
      id: "high-capacity-structures",
      title: "Installation and rental of high capacity structures",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/Home Banner 1 2(1).png`,
      alt: "High capacity structures for heavy-duty construction needs",
      to: "/services/serviceItem",
    },
    {
      id: "adjustable-props",
      title: "Adjustable props rental & sales",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/20819369_135108873765021_8187137705964148355_o (1) 2(1).png`,
      alt: "Adjustable props available for rental and sales",
      to: "/services/serviceItem",
    },
    {
      id: "scaffolding-design",
      title: "Scaffolding design",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png`,
      alt: "Engineering team designing scaffolding plans and structures",
      to: "/services/serviceItem",
    },
    {
      id: "digital-services",
      title: "Digital services",
      desc:
        "Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.",
      img: `${ASSET}/assets/services/stock-photo-young-woman-using-smart-phone-social-media-concept-1573945981(1).png`,
      alt: "Digital services support and online solutions",
      to: "/services/serviceItem",
    },
  ]

  return (
    <section id="services" aria-labelledby="home-services-title">
      <header className="px-[20px] sm:px-[20px] lg:px-[50px]">
        <motion.h2
          id="home-services-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-[30px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[30px] font-sairaStencil font-[700] leading-[53.3px] text-[#003A80] my-[30px] lg:mt-[30px] lg:mb-[50px] lg:leading-[73.3px]"
        >
          All Services
        </motion.h2>

        <div className="w-full text-center mb-[20px]">
          <Link
            to="/services"
            className="inline-flex items-center justify-center text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[#003A80] font-saira font-[700] underline underline-offset-4"
            aria-label="View all services"
          >
            View all services
          </Link>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 auto-rows-fr gap-x-8 lg:px-[50px] sm:px-[20px] px-[20px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px]"
      >
        {services.map((s) => (
          <article
            key={s.id}
            className="relative flex group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
            aria-labelledby={`${s.id}-title`}
          >
            <div className="relative group w-full">
              <ImageWebp
                srcWebp={s.img}
                src={s.img}
                className="object-cover w-full"
                alt={s.alt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="px-[25px]">
              <h3
                id={`${s.id}-title`}
                className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize"
              >
                {s.title}
              </h3>

              <p className="text-justify font-saira font-[400] text-[15px] pb-[60px]">
                {s.desc}
              </p>
            </div>

            <div className="w-full text-center mt-[50px] absolute bottom-[30px]">
              <Link
                to={s.to}
                className="text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500"
                aria-label={`Read more about ${s.title}`}
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  )
}

export default ServiceSection
