import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWebp from "./ImageWebp";

const BlogSection = () => {
  const ASSET = process.env.PUBLIC_URL || "";

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const posts = useMemo(() => {
    const baseDate = new Date();

    const items = [
      {
        key: "blog-1",
        title: "The Evolution of Scaffolding in Lebanon:\n A Historical Perspective",
        img: `${ASSET}/assets/blog/blog1.png`,
        alt: "Historical overview of scaffolding in Lebanon",
        to: "/blog-post-1",
      },
      {
        key: "blog-2",
        title: "Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon",
        img: `${ASSET}/assets/blog/blog2.png`,
        alt: "Scaffolding safety standards and safe site practices in Lebanon",
        to: "/blog-post-2",
      },
      {
        key: "blog-3",
        title: "Innovative Scaffolding Solutions for Lebanon's Unique Architectural Challenges",
        img: `${ASSET}/assets/blog/blog3.png`,
        alt: "Innovative scaffolding solutions for complex architectural projects in Lebanon",
        to: "/blog-post-3",
      },
    ];

    return items.map((p, index) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() - index);

      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");

      return {
        ...p,
        day: dd,
        month: months[d.getMonth()],
        isoDate: `${yyyy}-${mm}-${dd}`,
      };
    });
  }, [ASSET]);

  const titleId = "home-blog-title";
  const descId = "home-blog-desc";

  return (
    <section id="blogSection" className="mt-[120px]" aria-labelledby={titleId} aria-describedby={descId}>
      <div className="max-w-[1450px] mx-auto px-[20px]">
        <motion.h2
          id={titleId}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[12px] text-[#003A80] text-center"
        >
          Blog
        </motion.h2>

        <p id={descId} className="sr-only">
          Technical insights and practical guidance on scaffolding systems, safety, and project execution from ACHI Scaffolding.
        </p>

        <motion.ul
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 mt-[35px] lg:px-[50px] px-[20px]"
          aria-label="Latest blog articles"
        >
          {posts.map((p) => (
            <motion.li key={p.key} className="w-full list-none">
              <article className="w-full">
                <div className="group relative">
                  <div className="absolute top-[-10px] left-[-10px] z-[20] bg-[#2B529C] rounded-[10px] px-[16px] py-[8px] text-center shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
                    <time dateTime={p.isoDate} aria-label={`Published on ${p.month} ${p.day}`}>
                      <p className="text-white font-saira font-[700] text-[18px] leading-[18px]">{p.day}</p>
                      <p className="text-white font-saira font-[400] text-[18px] leading-[18px]">{p.month}</p>
                    </time>
                  </div>

                  <div className="relative rounded-[22px] overflow-hidden">
                    <ImageWebp
                      srcWebp={p.img}
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-[260px] md:h-[280px] xl:h-[300px] object-cover transition duration-300 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/35" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                      <Link
                        to={p.to}
                        className="bg-white text-[#214f9b] font-saira font-[700] uppercase text-[12px] px-[18px] py-[10px] rounded-[12px]"
                        aria-label={`Read blog article: ${p.title.replace(/\s+/g, " ").trim()}`}
                        title={`Read: ${p.title.replace(/\s+/g, " ").trim()}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <h3 className="mt-[16px] text-[18px] font-saira font-[700] leading-[28px] text-[#003A80] capitalize whitespace-pre-line">
                  {p.title}
                </h3>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <div className="w-full text-center mt-[30px]">
          <Link
            to="/blog"
            className="text-[12px] md:text-[15px] text-white font-saira font-[700] leading-[29px] py-[12px] px-[55px] bg-[#28509e] rounded-[12px] uppercase border-2 border-[#28509e] transition duration-500"
            aria-label="Read all ACHI Scaffolding blog articles"
            title="Read all blog articles"
          >
            Read All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
