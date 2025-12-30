import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import ImageWebp from './ImageWebp'
import { applyLocalePrefix, getLangFromPath } from '../utils/langRouting'

function Header({ handleLanguage, currentLanguage, handleCountry, currentCountry = "Country" }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"
  const { t, i18n } = useTranslation()
  
  // Get current language from URL to sync with dropdowns
  const currentLang = getLangFromPath(location.pathname)
  
  // Helper to build language-aware paths for NavLinks
  const langPath = (path) => {
    const prefix = currentLang === 'fr' ? 'fr' : currentLang === 'ar' ? 'lb' : ''
    if (!prefix) return path
    return `/${prefix}${path}`
  }

  const ASSET = process.env.PUBLIC_URL || ""

  const [showMenu3, setshowMenu3] = useState(false)
  const [showCountry, setshowCountry] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("home-page", isHome)
    return () => document.body.classList.remove("home-page")
  }, [isHome])

  const closeAllDropdowns = () => {
    setshowMenu3(false)
    setshowCountry(false)
  }

  // Shared function to apply locale prefix changes (used by both dropdowns)
  const applyLocaleChange = (newCountry, newLanguage) => {
    // Determine the final country and language to use
    const finalCountry = newCountry !== null && newCountry !== undefined ? newCountry : currentCountry
    const finalLanguage = newLanguage !== null && newLanguage !== undefined ? newLanguage : currentLang
    
    // If country changed, try to sync language (France → French, Lebanon → Arabic)
    let syncedLanguage = finalLanguage
    if (newCountry) {
      if (newCountry === 'France' && finalLanguage !== 'fr') {
        syncedLanguage = 'fr'
      } else if (newCountry === 'Lebanon' && finalLanguage !== 'ar') {
        syncedLanguage = 'ar'
      }
    }
    
    applyLocalePrefix({
      currentPathname: location.pathname,
      country: finalCountry,
      language: syncedLanguage,
      navigate,
      onLanguageChange: (lang) => {
        if (handleLanguage) {
          handleLanguage(lang)
          i18n.changeLanguage(lang)
        }
      },
      onCountryChange: (country) => {
        if (handleCountry) {
          handleCountry(country)
        }
      }
    })
  }

  // Handle language change from dropdown
  const handleLanguageChange = (lang) => {
    applyLocaleChange(null, lang)
    setshowMenu3(false)
  }

  // Handle country change from dropdown
  const handleCountryChange = (country) => {
    applyLocaleChange(country, null)
    setshowCountry(false)
  }

  const goToHomeSection = (id) => {
    closeAllDropdowns()
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
      }, 200)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }
    setOpen(false)
  }

  const headerWrapClass = isHome
    ? "absolute inset-x-0 top-0 z-[999999]"
    : "relative w-full z-[999999]"

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#FA7800] font-saira font-[600] uppercase text-[14px] tracking-wide"
      : "text-white font-saira font-[600] uppercase text-[14px] tracking-wide hover:text-[#FA7800] transition duration-300"

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block ltr:ml-[20px] rtl:mr-[20px] text-[#FA7800]"
      : "block ltr:ml-[20px] rtl:mr-[20px] text-[#FFFFFF]"

  return (
    <>
      <header className={headerWrapClass}>
        <div className="bg-[#28509E] hidden md:flex flex-col md:flex-row justify-between items-center pt-[13px] pb-[13px] sm:pr-[20px] border-b-[0.5px] border-white/15">
          <div className='flex flex-row justify-between items-center w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] px-[8px] sm:px-[0px]'>
            <Link
              to={`/`}
              className='hidden md:block ltr:2xl:ml-[100px] ltr:xl:ml-[75px] ltr:lg:ml-[50px] ltr:md:ml-[20px] ltr:sm:ml-[60px] rtl:2xl:mr-[100px] rtl:xl:mr-[75px] rtl:lg:mr-[50px] rtl:md:mr-[20px] rtl:sm:mr-[60px] 2xl:flex-[0.5] xl:flex-[0.5] lg:flex-[0.5] md:flex-[0.5]'
              onClick={() => { closeAllDropdowns(); setOpen(false) }}
            >
              <ImageWebp srcWebp={`${ASSET}/assets/ArchiScaffoldinglogo_lossyalpha.webp`} src={`${ASSET}/assets/ArchiScaffoldinglogo_lossyalpha.webp`} alt='siteLogo' className='2xl:w-[150px] w-[100px]' />
            </Link>

            <div className='flex justify-center items-center ltr:md:ml-[20px] ltr:sm:ml-[60px] ltr:lg:ml-0 rtl:md:mr-[20px] rtl:sm:mr-[60px] rtl:lg:mr-0'>
              <ImageWebp srcWebp={`${ASSET}/assets/localisationsicon_lossyalpha.webp`} src={`${ASSET}/assets/localisationsicon_lossyalpha.webp`} className='ltr:mr-[10px] rtl:ml-[10px] w-[24px]' alt='localizationIcon' />
              <p className='text-[11px] text-white ltr:font-[500] rtl:font-[600] leading-[30px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] font-saira'>{t('header.Lebanon')}</p>
            </div>

            <div className='flex justify-center items-center sm:text-[15px]'>
              <ImageWebp srcWebp={`${ASSET}/assets/emailIcon_lossyalpha.webp`} src={`${ASSET}/assets/emailIcon_lossyalpha.webp`} className='ltr:mr-[10px] rtl:ml-[10px] w-[24px]' alt='emailIcon' />
              <p className='text-[11px] text-white font-[500] leading-[30px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] font-saira'>achi.gr@hotmail.com</p>
            </div>

            <div className='flex justify-center items-center'>
              <ImageWebp srcWebp={`${ASSET}/assets/wpicon_lossyalpha.webp`} src={`${ASSET}/assets/wpicon_lossyalpha.webp`} className='ltr:mr-[10px] rtl:ml-[10px] w-[24px]' alt='whatsappIcon' />
              <p className='text-[11px] text-white font-[500] leading-[30px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] font-saira' dir='ltr'>+96103322811</p>
            </div>
          </div>

          <div className='hidden xl:flex justify-center items-center pr-[20px] mt-[20px] mb-[10px] md:mt-[0px] md:pt-[10px]'>
            <a className='ltr:mr-[20px] rtl:ml-[20px] cursor-pointer' href='https://facebook.com/ACHISCAFF' target='_blank' rel="noreferrer"><img src={`${ASSET}/assets/iconoir_facebook.svg`} alt='Facebook' /></a>
            <a className='ltr:mr-[20px] rtl:ml-[20px] cursor-pointer' href='https://www.instagram.com/achiscaffoldinglb' target='_blank' rel="noreferrer"><img src={`${ASSET}/assets/mdi_instagram.svg`} alt='Instagram' /></a>
            <a className='ltr:mr-[20px] rtl:ml-[20px] cursor-pointer' href='https://twitter.com/AchiScaffolding' target='_blank' rel="noreferrer"><img src={`${ASSET}/assets/ri_twitter-x-fill.svg`} alt='X' /></a>
            <a className='ltr:mr-[20px] rtl:ml-[20px] cursor-pointer' href='https://www.linkedin.com/company/achi-scaffolding/' target='_blank' rel="noreferrer"><img src={`${ASSET}/assets/basil_linkedin-outline.svg`} alt='LinkedIn' /></a>
            <a className='cursor-pointer' href='https://www.tiktok.com/@achiscaffolding' target='_blank' rel="noreferrer"><img src={`${ASSET}/assets/ph_tiktok-logo.svg`} alt='TikTok' /></a>
          </div>

          <div className='flex items-center gap-5 ltr:mr-5 rtl:ml-5 relative'>
            <div className='flex justify-center items-center cursor-pointer relative' onClick={() => { closeAllDropdowns(); setshowCountry(!showCountry) }}>
              <img src={`${ASSET}/assets/ic_outline-language.svg`} className='ltr:mr-[9px] rtl:ml-[9px] w-full h-full md:w-[22px]' alt='country' />
              <p className='text-white font-saira font-[500] text-[16px]'>{currentCountry}</p>
              <ExpandMoreIcon fontSize={'medium'} className='ml-[5px] text-white cursor-pointer' />
              <div className={`absolute right-0 top-[50px] bg-white p-[16px] ${showCountry ? 'flex' : 'hidden'} z-[999]`}>
                <div className='flex flex-col'>
                  <p className='text-[#00204A] font-saira font-[500] text-[16px] cursor-pointer hover:text-[#FA7800] transition duration-500' onClick={() => handleCountryChange('Lebanon')}>Lebanon</p>
                  <p className='text-[#00204A] font-saira font-[500] text-[16px] cursor-pointer hover:text-[#FA7800] transition duration-500 pt-[16px]' onClick={() => handleCountryChange('France')}>France</p>
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center cursor-pointer relative' onClick={() => { closeAllDropdowns(); setshowMenu3(!showMenu3) }}>
              <img src={`${ASSET}/assets/ic_outline-language.svg`} className='ltr:mr-[9px] rtl:ml-[9px] w-full h-full md:w-[22px]' alt='language' />
              <p className='text-white font-saira font-[500] text-[16px]'>{currentLanguage}</p>
              <ExpandMoreIcon fontSize={'medium'} className='ml-[5px] text-white cursor-pointer' />
              <div className={`absolute right-0 top-[50px] bg-white p-[16px] ${showMenu3 ? 'flex' : 'hidden'} cursor-default z-[999]`}>
                <div className='flex flex-col ltr:mr-[50px] rtl:ml-[50px]'>
                  <p className='text-[#00204A] font-saira font-[500] text-[16px] cursor-pointer hover:text-[#FA7800] transition duration-500' onClick={() => handleLanguageChange('en')}>{t('langDropwn.english')}</p>
                  <p className='text-[#00204A] font-saira font-[500] text-[16px] cursor-pointer hover:text-[#FA7800] transition duration-500 pt-[16px]' onClick={() => handleLanguageChange('ar')}>{t('langDropwn.arabic')}</p>
                  <p className='text-[#00204A] font-saira font-[500] text-[16px] cursor-pointer hover:text-[#FA7800] transition duration-500 pt-[16px]' onClick={() => handleLanguageChange('fr')}>{t('langDropwn.french')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          className={`hidden md:block ${
            isHome
              ? "absolute left-0 right-0 top-full bg-transparent border-b-0"
              : "relative bg-[#28509E] border-b-[#FFFFFF] border-b-[1px] border-solid"
          }`}
        >
          <div className="w-full flex justify-start">
            <ul className={`${isHome ? "flex gap-8 py-[18px] px-[120px]" : "flex gap-8 py-[18px] px-[120px]"}`}>
              <li><NavLink to={langPath("/")} className={navLinkClass} onClick={closeAllDropdowns}>Home</NavLink></li>
              <li><NavLink to={langPath("/about")} className={navLinkClass} onClick={closeAllDropdowns}>About us</NavLink></li>
              <li><NavLink to={langPath("/services")} className={navLinkClass} onClick={closeAllDropdowns}>Services</NavLink></li>
              <li><NavLink to={langPath("/products")} className={navLinkClass} onClick={closeAllDropdowns}>Products</NavLink></li>
              <li><NavLink to={langPath("/sectors")} className={navLinkClass} onClick={closeAllDropdowns}>Sectors</NavLink></li>
              <li><button className="text-white font-saira font-[600] uppercase text-[14px] tracking-wide hover:text-[#FA7800] transition duration-300" onClick={() => goToHomeSection("clients")}>Clients</button></li>
              <li><NavLink to={langPath("/projects")} className={navLinkClass} onClick={closeAllDropdowns}>Projects</NavLink></li>
              <li><NavLink to={langPath("/blog")} className={navLinkClass} onClick={closeAllDropdowns}>Blog</NavLink></li>
              <li><NavLink to={langPath("/gallery")} className={navLinkClass} onClick={closeAllDropdowns}>Gallery</NavLink></li>
              <li><button className="text-white font-saira font-[600] uppercase text-[14px] tracking-wide hover:text-[#FA7800] transition duration-300" onClick={() => goToHomeSection("contactForm")}>Contact us</button></li>
            </ul>
          </div>
        </nav>

        <div className='bg-[#28509E] flex md:hidden flex-row justify-between items-center pt-[10px] pb-[10px] sm:pr-[20px] border-b-[#FFFFFF] border-b-[1px] border-solid'>
          <div className='flex flex-row justify-between items-center w-[100%] px-[8px] sm:px-[0px] ltr:ml-[20px] rtl:mr-[20px]'>
            <Link to={`/`} onClick={() => { closeAllDropdowns(); setOpen(false) }}>
              <img className='w-[90px]' src={`${ASSET}/assets/ArchiScaffoldinglogo.png`} alt='siteLogo' />
            </Link>
          </div>

          <div className='ltr:mr-[20px] rtl:ml-[20px] md:hidden'>
            <MenuIcon sx={{ fontSize: "40px" }} className="text-white cursor-pointer" onClick={() => { closeAllDropdowns(); setOpen(!open) }} />
          </div>
        </div>
      </header>

      <ul className={`md:hidden bg-[#28509E] text-white fixed w-full top-0 overflow-y-auto bottom-0 py-[40px] text-start duration-500 ${open ? "left-0" : "left-[-100%]"} z-[99999999] ltr:pl-3 rtl:pr-3`}>
        <li>
          <div className='flex justify-between items-center mb-[25px]'>
            <div className='flex flex-row justify-between items-center w-[100%] px-[8px] sm:px-[0px]'>
              <Link to={`/`} onClick={() => setOpen(false)}>
                <ImageWebp srcWebp={`${ASSET}/assets/ArchiScaffoldinglogo_lossyalpha.webp`} className='w-[90px]' src={`${ASSET}/assets/ArchiScaffoldinglogo_lossyalpha.webp`} alt='siteLogo' />
              </Link>
            </div>
            <div className='ltr:mr-5 rtl:ml-5'>
              <CloseIcon fontSize={'large'} className="text-[#BED0FF] cursor-pointer" onClick={() => setOpen(false)} />
            </div>
          </div>
        </li>

        <NavLink to={langPath("/")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Home</p></NavLink>
        <NavLink to={langPath("/about")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>About us</p></NavLink>
        <NavLink to={langPath("/services")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Services</p></NavLink>
        <NavLink to={langPath("/products")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Products</p></NavLink>
        <NavLink to={langPath("/sectors")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Sectors</p></NavLink>
        <li className='ltr:ml-[20px] rtl:mr-[20px]'><p className='font-[500] text-[20px] cursor-pointer hover:text-[#FA7800] transition duration-500 font-saira py-5' onClick={() => goToHomeSection("clients")}>Clients</p></li>
        <NavLink to={langPath("/projects")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Projects</p></NavLink>
        <NavLink to={langPath("/blog")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Blog</p></NavLink>
        <NavLink to={langPath("/gallery")} className={mobileNavLinkClass} onClick={() => setOpen(false)}><p className='font-[500] text-[20px] font-saira py-5'>Gallery</p></NavLink>
        <li className='ltr:ml-[20px] rtl:mr-[20px] border-[#FFFFFF] border-solid border-b-[2px] pb-[30px]'><p className='font-[500] text-[20px] cursor-pointer hover:text-[#FA7800] transition duration-500 font-saira py-5' onClick={() => goToHomeSection("contactForm")}>Contact us</p></li>
      </ul>
    </>
  )
}

export default Header
