// src/components/Footer.js
import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import ImageWebp from "./ImageWebp"
import { getLangFromPath } from "../utils/langRouting"

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const currentLang = getLangFromPath(location.pathname)

  const langPath = (path) => {
    const prefix = currentLang === "fr" ? "fr" : currentLang === "ar" ? "lb" : ""
    if (!prefix) return path
    return `/${prefix}${path}`
  }

  const cleanPath = location.pathname.replace(/^\/(fr|lb)(?=\/|$)/, "")
  const isHome = cleanPath === "/" || cleanPath === ""

  const goToHomeSection = (id) => {
    if (!isHome) {
      navigate(langPath("/"))
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
      }, 250)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }
  }

  return (
    <footer className="bg-[#28509E] border-t-[#FFFFFF] border-t-[1px] border-solid py-[40px] md:py-[60px]">
      <div className="max-w-[1250px] mx-auto px-[20px] sm:px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-[30px] md:gap-y-[30px] gap-x-0 md:gap-x-[60px] items-start">
          <div className="flex justify-start items-start md:pt-[30px] -ml-0 md:-ml-[60px]">
            <Link to={langPath("/")}>
              <ImageWebp
                srcWebp="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
                src="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
                alt="ACHI Scaffolding logo"
                className="max-w-[170px] h-auto block"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-start items-start w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-[20px] sm:gap-x-[40px] gap-y-[10px] w-full">
              <ul className="space-y-[10px]">
                <li>
                  <Link to={langPath("/")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={langPath("/about")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to={langPath("/services")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={langPath("/products")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Products
                  </Link>
                </li>
              </ul>

              <ul className="space-y-[10px]">
                <li>
                  <Link to={langPath("/sectors")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Sectors
                  </Link>
                </li>

                <li>
                  <Link to={langPath("/projects")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to={langPath("/blog")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to={langPath("/gallery")} className="font-saira text-white/90 text-[18px] sm:text-[20px] hover:text-[#FF8A00] transition duration-200 block py-[4px]">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

           
          </div>

          <div className="flex flex-col justify-start items-start w-full">
            <h4 className="font-[Rajdhani] text-[26px] sm:text-[30px] font-[700] uppercase mb-[12px] text-white md:whitespace-nowrap tracking-[1px]">
              Our Contacts
            </h4>

            <ul className="space-y-[12px] w-full">
              <li className="flex items-center font-saira text-white/90 text-[18px] sm:text-[20px]">
                <i className="fa-solid fa-phone text-[22px] w-[26px] mr-[18px] text-white flex-shrink-0"></i>
                <a href="tel:+96103322811" className="hover:text-[#FF8A00] transition duration-200 break-all">
                  +96103322811
                </a>
              </li>

              <li className="flex items-start font-saira text-white/90 text-[18px] sm:text-[20px]">
                <i className="fa-regular fa-envelope text-[22px] w-[26px] mr-[18px] text-white flex-shrink-0 mt-[2px]"></i>
                <a href="mailto:achi.gr@hotmail.com" className="hover:text-[#FF8A00] transition duration-200 break-all">
                  achi.gr@hotmail.com
                </a>
              </li>

              <li className="flex items-center font-saira text-white/90 text-[18px] sm:text-[20px]">
                <i className="fa-solid fa-location-dot text-[22px] w-[26px] mr-[18px] text-white flex-shrink-0"></i>
                <span>Lebanon</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start w-full">
            <h4 className="font-[Rajdhani] text-[26px] sm:text-[30px] font-[700] uppercase mb-[12px] text-white md:whitespace-nowrap tracking-[1px]">
              Follow us
            </h4>

            <div className="flex gap-[20px] mt-[14px] items-center flex-wrap">
              <a href="https://www.facebook.com/ACHISCAFF" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF8A00] transition duration-200 py-[8px] px-[4px]" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-[22px]"></i>
              </a>

              <a href="https://www.instagram.com/achiscaffoldinglb" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF8A00] transition duration-200 py-[8px] px-[4px]" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-[22px]"></i>
              </a>

              <a href="https://x.com/AchiScaffolding" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF8A00] transition duration-200 py-[8px] px-[4px]" aria-label="X">
                <i className="fa-brands fa-x-twitter text-[22px]"></i>
              </a>

              <a href="https://www.linkedin.com/company/achi-scaffolding/" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF8A00] transition duration-200 py-[8px] px-[4px]" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in text-[22px]"></i>
              </a>

              <a href="https://www.tiktok.com/@achiscaffolding" target="_blank" rel="noreferrer" className="text-white hover:text-[#FF8A00] transition duration-200 py-[8px] px-[4px]" aria-label="TikTok">
                <i className="fa-brands fa-tiktok text-[22px]"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
