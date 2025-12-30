import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import ImageWebp from "./ImageWebp";

function SampleNextArrow(props) {
  const { className, style, onClick, assetBase } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={`${assetBase}/assets/Button Arrow R.svg`} alt="Next slide" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, assetBase } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ImageWebp
        srcWebp={`${assetBase}/assets/ButtonArrowL_lossyalpha.webp`}
        src={`${assetBase}/assets/ButtonArrowL_lossyalpha.webp`}
        alt="Previous slide"
      />
    </div>
  );
}

const Hero = ({ showMenu, setshowMenu, direction, userLang }) => {
  const { t } = useTranslation();

  const ASSET = process.env.PUBLIC_URL || "";

  var settings = {
    dots: true,
    swipeToSlide: true,
    swipe: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow assetBase={ASSET} />,
    prevArrow: <SamplePrevArrow assetBase={ASSET} />,
    rtl: direction === "rtl" ? true : false,
  };

  const panelBase =
    "pr-[10px] ltr:ml-[20px] rtl:mr-[20px] w-fit ltr:2xl:ml-[120px] ltr:xl:ml-[120px] ltr:lg:ml-[80px] ltr:md:ml-[60px] ltr:sm:ml-[60px] rtl:2xl:mr-[120px] rtl:xl:mr-[120px] rtl:lg:mr-[80px] rtl:md:mr-[60px] rtl:sm:mr-[60px] py-[30px] p-[20px] rounded-[10px] bg-gradient-to-tr from-black/60 via-black/30 to-black/5";
  const panelSlide1 = `${panelBase} mt-[0px]`;
  const panelSlide2 = `${panelBase} mt-[60px]`;
  const panelSlide3 = `${panelBase} mt-[80px]`;

  return (
    <div id="hero">
      {/* <Navbar showMenu={showMenu} setshowMenu={setshowMenu} userLang={userLang} withBg={false} /> */}

      <Slider {...settings}>
        <div
          className="bg-firstSlideBg min-h-[800px] md:min-h-[700px] bg-no-repeat bg-cover bg-center pb-[220px] pt-[220px] md:pb-[170px] md:pt-[170px]"
          dir={direction}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className={panelSlide1}
          >
            <h2 className="font-[Rajdhani] uppercase text-white text-[42px] font-[700] leading-[1.15] mb-[12px]">
              {t("banner1.title")}
            </h2>

            <p className="pr-[10px] text-[15px] 2xl:text-[20px] xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[15px] w-fit xl:leading-[32px] lg:leading-[32px] leading-[24px] font-[400] text-white font-saira mt-[15px] sm:mt-[20px] md:mt-[30px] mb-[30px]">
              {t("banner1.subtitle")}
            </p>

            <a
              href="https://wa.me/+96103322811"
              target="_blank"
              rel="noreferrer"
              className="ltr:w-[inherit] rtl:w-[100%] flex justify-center px-[20px] sm:px-[30px] text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[700] leading-[29px] py-[15px] md:px-[20px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500 heroBtn"
            >
              {t("banner1.button")}
            </a>
          </motion.div>
        </div>

        <div
          className="bg-secondSlidebg h-full bg-no-repeat bg-cover bg-center pb-[160px] pt-[160px] md:pb-[120px] md:pt-[120px]"
          dir={direction}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className={panelSlide2}
          >
            <h2 className="font-[Rajdhani] uppercase text-white text-[42px] font-[700] leading-[1.15] mb-[12px]">
              {t("banner2.title")}
            </h2>

            <p className="pr-[10px] text-[15px] 2xl:text-[20px] xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[15px] w-fit xl:leading-[32px] lg:leading-[32px] leading-[24px] font-[400] text-white font-saira mt-[15px] sm:mt-[20px] md:mt-[30px] mb-[30px]">
              {t("banner2.subtitle")}
            </p>

            <a
              href="https://wa.me/+96103322811"
              target="_blank"
              rel="noreferrer"
              className="ltr:w-[inherit] rtl:w-[100%] flex justify-center px-[20px] sm:px-[30px] text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[700] leading-[29px] py-[15px] md:px-[20px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500 heroBtn"
            >
              {t("banner2.button")}
            </a>
          </motion.div>
        </div>

        <div
          className="bg-thirdSlideBg h-full bg-no-repeat bg-cover bg-center pb-[160px] pt-[160px] md:pb-[120px] md:pt-[120px]"
          dir={direction}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className={panelSlide3}
          >
            <h2 className="font-[Rajdhani] uppercase text-white text-[42px] font-[700] leading-[1.15] mb-[12px]">
              {t("banner3.title")}
            </h2>

            <p className="pr-[10px] text-[15px] 2xl:text-[20px] xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[15px] w-fit xl:leading-[32px] lg:leading-[32px] leading-[24px] font-[400] text-white font-saira mt-[15px] sm:mt-[20px] md:mt-[30px] mb-[30px]">
              {t("banner3.subtitle")}
            </p>

            <a
              href="https://wa.me/+96103322811"
              target="_blank"
              rel="noreferrer"
              className="ltr:w-[inherit] rtl:w-[100%] flex justify-center px-[20px] sm:px-[30px] text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[700] leading-[29px] py-[15px] md:px-[20px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500 heroBtn"
            >
              {t("banner3.button")}
            </a>
          </motion.div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
