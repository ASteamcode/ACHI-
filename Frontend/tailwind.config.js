/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('/public/assets/hero-banner-final.webp')",
        'serviceBg' : "url('/public/assets/serviceLinear.png')",
        'futurepers' : "url('/public/assets/future-perspec-mobile.webp')",
        'singleServiceBg' : "url('/public/assets/g10.png')",
        'missionBg': "url('/public/assets/missionBack_lossyalpha.webp')",
        'choseUsBg': "url('/public/assets/chooseUseBg.png')",
        'visdionBg': "url('/public/assets/vision.webp')",
        'aboutUsBg': "url('/public/assets/About Us 1(1).png')",
        'testBg': "url('/public/assets/arrow circle.png')",
        // 'secondSlidebg': "url('/public/assets/firstslidebg_lossyalpha.webp')",
        'secondSlidebg': "url('/public/assets/secondBgSlide2_lossyalpha.webp')",
        // 'firstSlideBg': "url('/public/assets/Group49138.png')",
        // 'firstSlideBg': "url('/public/assets/Maska_lossyalpha.webp')",
        'firstSlideBg': "url('/public/assets/firstBgSlide2_lossyalpha.webp')",
        // 'thirdSlideBg': "url('/public/assets/Maska(2)_lossyalpha.webp')",
        'thirdSlideBg': "url('/public/assets/thirdSlideBg_lossyalpha.webp')",
        'servicePageBanner': "url('/public/assets/servicesBanner.png')",
        'bgwhychose': "url('/public/assets/124553811_724242481518321_2860198893114815692_n.webp')",
      },
      fontFamily: {
        'russo': ['Russo One', 'sans-serif'],
        'fira': ['Fira Sans', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'saira' : ['Saira' , 'sans-serif'],
        'sairaStencil' : ['Saira Stencil One' , 'sans-serif'],
        'nunito' : ['Nunito Sans' , 'sans-serif'],
        'spartan' : ['Spartan' , 'sans-serif'],
      },
      display: ["group-hover"],
      boxShadow: {
        'viwall': '0px 4px 4px rgba(0, 0, 0, 0.15)',
        'cardBtn': '0px 4px 4px rgba(0, 0, 0, 0.05)',
        'aboutus': '0px 0px 12px 6px rgba(0, 32, 74, 0.12)',
        'mbmenu' : '0px 2px 10px rgba(0, 0, 0, 0.1)',
        'testi' : '0px 10px 40px rgba(0, 0, 0, 0.15)',
        'choseBg': 'rgba(0, 32, 74, 0.68) 0px 0px 0px 2000px inset',
        'servicesCard': '1px 8px 24px 0px rgba(149, 157, 165, 0.20)',
      },
      borderColor: { 
        'input' : "#c9cdd3",
      },
      backgroundPosition:{
        'initial': 'initial',
      },
      dropShadow: {
        'mission': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}