import React from "react";
import { Link } from "react-router-dom";
import ImageWebp from "../ImageWebp";

const ServicesPageAllServices = () => {
  const services = [
    {
      title: "Specialized Laborforce",
      desc: "Exeperinced teams trained in safe, efficient, and professional scaffolding installation, supervision, and dismantling.",
      imgWebp: "/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png",
      img: "/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png",
    },
    {
      title: "Scaffolding for Façades",
      desc: "Secure, modular systems for building envelopes — ideal for renovations, maintenance, and façade works.",
      imgWebp: "/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png",
      img: "/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png",
    },
    {
      title: "Suspended Scaffolding",
      desc: "Suspended platforms and hanging systems for areas where ground access is not possible or safe.",
      imgWebp: "/assets/services/Suspended scaffolding 1 2(1).png",
      img: "/assets/services/Suspended scaffolding 1 2(1).png",
    },
    {
      title: "High-Capacity Structures",
      desc: "Engineered support systems designed for high loads, slab casting, mezzanines, and construction staging.",
      imgWebp: "/assets/services/Home Banner 1 2(1).png",
      img: "/assets/services/Home Banner 1 2(1).png",
    },
    {
      title: "High-Rise Scaffolding",
      desc: "Vertical access solutions for towers, commercial blocks, and tall structures.",
      imgWebp: "/assets/services/SDC14429(1).png",
      img: "/assets/services/SDC14429(1).png",
    },
    {
      title: "Circular & Dome Scaffolding",
      desc: "Custom-built solutions for curved surfaces, domes, and heritage sites requiring precision and care.",
      imgWebp: "/assets/services/SDC14429(1).png",
      img: "/assets/services/SDC14429(1).png",
    },
    {
      title: "Scaffolding for Events",
      desc: "Custom platforms, towers, and rigs for events, cultural setups, and temporary installations.",
      imgWebp: "/assets/services/Home Banner 4 2(1).png",
      img: "/assets/services/Home Banner 4 2(1).png",
    },
    {
      title: "Industrial Scaffolding",
      desc: "Tailored scaffolding systems for factories, plants, oil & gas, and industrial maintenance operations.",
      imgWebp: "/assets/services/Home Banner 4 2(1).png",
      img: "/assets/services/Home Banner 4 2(1).png",
    },
    {
      title: "Roof Scaffolding",
      desc: "Secure access systems for roof works, waterproofing, insulation, and maintenance.",
      imgWebp: "/assets/services/Home Banner 4 2(1).png",
      img: "/assets/services/Home Banner 4 2(1).png",
    },
    {
      title: "Mobile Suspended Scaffolding (for Bridges)",
      desc: "Engineered mobile systems for bridge inspections, painting, and maintenance.",
      imgWebp: "/assets/services/Suspended scaffolding 1 2(1).png",
      img: "/assets/services/Suspended scaffolding 1 2(1).png",
    },
    {
      title: "Scaffodling Access Stairs",
      desc: "Temporary stair towers for safe movement of workers and materials between site levels.",
      imgWebp: "/assets/services/SDC14429(1).png",
      img: "/assets/services/SDC14429(1).png",
    },
    {
      title: "Adjustable Props (Rental & Sales)",
      desc: "Rental and sale of adjustable steel props in Lebanon — essential for slab support, formwork, and renovation works.",
      imgWebp: "/assets/services/20819369_135108873765021_8187137705964148355_o (1) 2(1).png",
      img: "/assets/services/20819369_135108873765021_8187137705964148355_o (1) 2(1).png",
    },

    {
      title: "Propping & Shoring Systems",
      desc: "Heavy-duty shoring and propping solutions in Lebanon for vertical support of slabs, beams, and complex structures.",
      imgWebp: "/assets/services/SDC14429(1).png",
      img: "/assets/services/SDC14429(1).png",
    },

    {
      title: "Unloading & Loading Platforms",
      desc: "Safe zones for the organized transfer of materials and tools during construction.",
      imgWebp: "/assets/services/SDC14429(1).png",
      img: "/assets/services/SDC14429(1).png",
    },
    {
      title: "Design and Consulting",
      desc: "Technical planning, drawings, and custom scaffolding strategies by experienced engineers.",
      imgWebp: "/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png",
      img: "/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png",
    },
  ];

  return (
    <section className="w-full bg-white py-[70px]">
      <div className="max-w-[1250px] mx-auto px-[20px]">
        <h2 className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[12px] text-[#003A80] text-center">
          ALL SERVICES
        </h2>

        <p className="text-center text-[#4a5c7a] font-['Open_Sans'] text-[16px] leading-[1.7] max-w-[980px] mx-auto mt-[10px] mb-[35px]">
          We deliver a wide range of advanced scaffolding and access solutions, supported by a trained workforce and engineered design. Our services adapt to projects of all sizes and complexities — across construction, infrastructure, restoration, and events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 auto-rows-fr">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="bg-white rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <div className="w-full">
                <ImageWebp
                  srcWebp={s.imgWebp}
                  src={s.img}
                  alt={s.title}
                  className="w-full h-[230px] object-cover"
                />
              </div>

              <div className="p-[22px] flex flex-col flex-1">
                <h3 className="font-[Rajdhani] text-[#214f9b] text-[22px] font-[700] mb-[10px]">
                  {s.title}
                </h3>

                <p className="font-['Open_Sans'] text-[#4a5c7a] text-[15px] leading-[1.7] flex-1">
                  {s.desc}
                </p>

                <div className="mt-[16px] flex justify-center">
                  <Link
                    to="/services/serviceItem"
                    className="inline-block px-[28px] py-[10px] rounded-[40px] border-[2px] border-[#214f9b] text-[#214f9b] font-[Rajdhani] font-[600] uppercase text-[13px] transition duration-300 hover:bg-[#214f9b] hover:text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPageAllServices;
