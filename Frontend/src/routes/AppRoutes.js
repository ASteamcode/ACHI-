import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Home from '../pages/Home'
import { Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LangRouter, { useLangRouter } from '../routing/LangRouter'

import 'glider-js/glider.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Gallery from '../pages/Gallery'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageNotFound from '../pages/PageNotFound'
import Blog from '../pages/Blog'
import BlogItem from '../pages/BlogItem'
import Services from '../pages/Services'
import SingleService from '../components/services/SingleService'

import About from '../pages/About'
import Products from '../pages/Products'
import Projects from '../pages/Projects'
import Sectors from '../pages/Sectors'

// Inner component that uses LangRouter context
function AppRoutesInner({ showMenu, setshowMenu, handleLanguage, currentLanguage, handleCountry, currentCountry }) {
  const { i18n } = useTranslation()
  const { cleanLocation } = useLangRouter()

  return (
    <>
      <ScrollToTop />
      <div className="App" onClick={() => showMenu ? setshowMenu(false) : true}>
        <Header
          handleLanguage={handleLanguage}
          currentLanguage={currentLanguage}
          handleCountry={handleCountry}
          currentCountry={currentCountry}
        />

        <Routes location={cleanLocation} key={cleanLocation.pathname}>
          <Route path="/" element={<Home showMenu={showMenu} setshowMenu={setshowMenu} direction={i18n.dir()} userLang={i18n.language} />} />

          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sectors" element={<Sectors />} />

          <Route path="/services" element={<Services showMenu={showMenu} setshowMenu={setshowMenu} userLang={i18n.language} />} />
          <Route path="/services/serviceItem" element={<SingleService />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post-2" element={<BlogItem />} />
          <Route path="/blog-post-1" element={<BlogItem />} />
          <Route path="/blog-post-3" element={<BlogItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

function App() {
  const [showMenu, setshowMenu] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('English')
  const [currentCountry, setCurrentCountry] = useState('Country')

  const { t, i18n } = useTranslation()

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang)
    if (lang === 'en') setCurrentLanguage(t('langDropwn.english'))
    else if (lang === 'ar') setCurrentLanguage(t('langDropwn.arabic'))
    else setCurrentLanguage(t('langDropwn.french'))
  }

  const handleCountry = (country) => {
    setCurrentCountry(country)
  }

  useEffect(() => {
    document.dir = i18n.dir()
  }, [i18n, i18n.language])

  return (
    <LangRouter>
      <AppRoutesInner
        showMenu={showMenu}
        setshowMenu={setshowMenu}
        handleLanguage={handleLanguage}
        currentLanguage={currentLanguage}
        handleCountry={handleCountry}
        currentCountry={currentCountry}
      />
    </LangRouter>
  )
}

export default App
