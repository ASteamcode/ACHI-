import React from 'react'
import Company from '../components/Company'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Service from '../components/Service'
import WhyChoseUs from '../components/WhyChoseUs'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import SectorsBar from '../components/SectorsBar'
import SEO from '../components/SEO'

const Home = ({ showMenu, setshowMenu, direction, userLang }) => {
  const ASSET = process.env.PUBLIC_URL || ""

  return (
    <main>
      <SEO
        title="Industrial & Construction Scaffolding Systems | ACHI"
        description="ACHI Scaffolding delivers access systems, shoring, and scaffolding solutions for construction, restoration, and industrial projects. Request technical consultation."
        canonical="https://achi-scaffolding.github.io/"
      />
      <div className="sr-only">
        <h1>Industrial &amp; Construction Scaffolding Systems Built for Safety, Precision, and Scale</h1>

        <p>
          ACHI Scaffolding delivers professional scaffolding systems and access solutions for construction, restoration, and industrial projects.
        </p>
        <p>
          We support contractors, developers, and engineers with compliant equipment, technical know-how, and execution-ready solutions — from standard access to complex shoring and propping systems.
        </p>

        <section aria-label="Services snapshot">
          <h2>Services Snapshot</h2>
          <ul>
            <li>Scaffolding supply &amp; installation</li>
            <li>Access systems for restoration &amp; façades</li>
            <li>Shoring and structural propping</li>
            <li>Project-specific scaffolding solutions</li>
          </ul>
          <p>CTA: Request Technical Consultation</p>
        </section>

        <section aria-label="Why ACHI Scaffolding">
          <h2>Why ACHI Scaffolding</h2>
          <ul>
            <li>Operational experience, not theoretical design</li>
            <li>Safety-driven systems aligned with site constraints</li>
            <li>Reliable execution for time-sensitive projects</li>
            <li>Clear technical communication with contractors and engineers</li>
          </ul>
        </section>

        <section aria-label="Industries served">
          <h2>Industries Served</h2>
          <ul>
            <li>Construction &amp; general contracting</li>
            <li>Building restoration &amp; renovation</li>
            <li>Industrial facilities &amp; plants</li>
            <li>Residential and commercial developments</li>
          </ul>
        </section>

        <nav aria-label="Internal links">
          <h2>Internal Links Section</h2>
          <ul>
            <li><a href="/products">View Scaffolding Products</a></li>
            <li><a href="/projects">Explore Project Experience</a></li>
            <li><a href="/services">Learn About Scaffolding Systems</a></li>
          </ul>
        </nav>
      </div>

      <a
        href="tel:+96103322811"
        className="fixed right-[40px] bottom-[120px] md:bottom-[140px] z-[999999] rounded-full bg-[#28509E] hover:bg-[#214f9b] transition-colors duration-300 flex items-center justify-center shadow-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px] border-4 border-white callbutton"
        aria-label="Call ACHI Scaffolding +96103322811"
      >
        <i className="fa-solid fa-phone text-white text-[20px] md:text-[24px]" style={{ transform: 'scaleX(-1)' }}></i>
      </a>

      <a
        href="https://wa.me/+96103322811"
        target="_blank"
        rel="noreferrer"
        className="fixed right-[40px] bottom-[40px] z-[999999] rounded-full whatsapplogo"
        aria-label="WhatsApp ACHI Scaffolding"
      >
        <img
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
          src={`${ASSET}/assets/logos_whatsapp-icon.png`}
          alt="WhatsApp"
        />
      </a>

      <Hero showMenu={showMenu} setshowMenu={setshowMenu} direction={direction} userLang={userLang} />
      <Service direction={direction} />
      <Company />
      <Clients direction={direction} />
      <WhyChoseUs direction={direction} />
      <SectorsBar />
      <Testimonials direction={direction} />
      <BlogSection />
      <ContactForm />
    </main>
  )
}

export default Home
