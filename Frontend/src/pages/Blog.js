// src/pages/Blog.js
import React, { useMemo } from "react"
import { motion } from "framer-motion"
import ImageWebp from "../components/ImageWebp"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"

const Blog = () => {
  const base = process.env.PUBLIC_URL || ""

  const months = useMemo(
    () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    []
  )

  const posts = useMemo(
    () => [
      {
        id: "blog-1",
        title: "The Evolution of Scaffolding in Lebanon: A Historical Perspective",
        excerpt:
          "This article explores the historical development of scaffolding in Lebanon, from traditional methods to modern engineered structures. It highlights key projects, technological advancements, and the essential role scaffolding plays in shaping Lebanon’s architectural landscape.",
        image: `${base}/assets/blog/blog1.png`,
        link: "/blog-post-1",
        offsetDays: 0,
      },
      {
        id: "blog-2",
        title: "Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon",
        excerpt:
          "Safety is essential in the construction industry. This article focuses on Lebanese scaffolding safety regulations, guidelines and best practices. It explains equipment standards and measures companies take to protect workers and the public.",
        image: `${base}/assets/blog/blog2.png`,
        link: "/blog-post-2",
        offsetDays: 1,
      },
      {
        id: "blog-3",
        title: "Innovative Scaffolding Solutions for Lebanon's Unique Architectural Challenges",
        excerpt:
          "Lebanon’s diverse architectural styles and terrains require creative scaffolding systems. This article highlights innovative solutions and case studies showing how modern scaffolding adapts to Lebanon’s complex construction environments.",
        image: `${base}/assets/blog/blog3.png`,
        link: "/blog-post-3",
        offsetDays: 2,
      },
    ],
    [base]
  )

  const getBadge = (offsetDays) => {
    const d = new Date()
    d.setHours(12, 0, 0, 0)
    d.setDate(d.getDate() - offsetDays)
    const day = String(d.getDate()).padStart(2, "0")
    const month = months[d.getMonth()]
    return { day, month }
  }

  return (
    <div className="blog-page">
      <SEO
        title="Blog | Scaffolding News & Insights | ACHI"
        description="Read the latest news, insights, and updates about scaffolding, construction, and shoring solutions from ACHI Scaffolding."
        canonical="https://achi-scaffolding.github.io/blog"
      />
      <section className="blog-header-title mt-[30px]">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-[Rajdhani] text-[42px] font-[700] uppercase text-[#003A80] mb-[40px]"
        >
          Blog
        </motion.h1>
      </section>

      <section className="other-articles-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="other-articles-grid grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 gap-x-8 px-[20px] sm:px-[20px] lg:px-[50px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px] place-items-center lg:place-items-start 2xl:place-items-start xl:place-items-start"
        >
          {posts.map((post) => {
            const badge = getBadge(post.offsetDays)

            return (
              <article
                key={post.id}
                className="other-article-card flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px] w-full"
              >
                <div className="relative w-full">
                  <div className="bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] absolute top-[-10px] left-[-10px] z-10">
                    <p className="text-[#FFF] font-saira font-[600] text-[20px] leading-[1]">
                      {badge.day}
                    </p>
                    <p className="text-[#FFF] font-saira font-[400] text-[20px] leading-[1.1] mt-[6px]">
                      {badge.month}
                    </p>
                  </div>

                  <ImageWebp
                    srcWebp={post.image}
                    className="object-cover w-full rounded-[17px]"
                    src={post.image}
                    alt={`${post.title} article thumbnail`}
                  />
                </div>

                <div className="other-article-content w-full">
                  <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                    {post.title}
                  </h3>

                  <p className="text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira">
                    {post.excerpt}
                  </p>

                  <div className="w-full flex justify-end items-center mt-[15px] mb-[30px] md:mb-[0]">
                    <Link
                      to={post.link}
                      className="group font-saira uppercase font-[600] text-[#003A80] text-[18px] transition-all mr-[15px] inline-flex items-center gap-[12px] hover:text-[#ff8e26]"
                    >
                      READ MORE
                      <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.0004 12.1797L3.02711 24.1797L0 21.3797L9.94622 12.1797L0 2.97969L3.02711 0.179687L16.0004 12.1797Z"
                          className="fill-[#28509E] group-hover:fill-[#ff8e26] transition-all"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </motion.div>
      </section>
    </div>
  )
}

export default Blog
