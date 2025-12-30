import React from "react";
import { motion } from "framer-motion";
// import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import ImageWebp from './ImageWebp';

function GridItems({ index , t }) {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:place-items-start xl:place-items-start lg:place-items-start md:place-items-start sm:place-content-start place-items-center gap-x-8 lg:px-[50px] sm:px-[20px] px-[20px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px]"
    >
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="PonteggiTradizionale"
      >
        <div className="relative group rounded-[11.6px] hover:bg-gray-900">
          <ImageWebp
            srcWebp='/assets/361641065_768035905323121_6701313797518833287_n2_lossyalpha.webp'
            id="switchImageAnim"
            className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
            src="/assets/361641065_768035905323121_6701313797518833287_n2_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.firstService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="ponteggiMultidirezionale"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/Suspendedscaffolding12_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/Suspendedscaffolding12_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.secondService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="ponteggiSospesi"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/SDC14429_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/SDC14429_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.thirdService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="pontegggiInternee"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/HomeBanner42_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/HomeBanner42_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.fourthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="StruturraPortata"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/HomeBanner12_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/HomeBanner12_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.fifthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="puntellamenti"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/20819369_135108873765021_8187137705964148355_o(1)2_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/20819369_135108873765021_8187137705964148355_o(1)2_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.sixthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="scaffoldingDesign"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/Scaffoldingdesign2_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/Scaffoldingdesign2_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.seventhService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="specializedLaborforce"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/361641065_768035905323121_6701313797518833287_n2_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/361641065_768035905323121_6701313797518833287_n2_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.ninthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="highRiseScaffolding"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/SDC14429_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/SDC14429_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.tenthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="circularDomeScaffolding"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/SDC14429_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/SDC14429_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.eleventhService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="scaffoldingForEvents"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/HomeBanner42_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/HomeBanner42_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.twelfthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="industrialScaffolding"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/HomeBanner42_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/HomeBanner42_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.thirteenthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="roofScaffolding"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/HomeBanner42_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/HomeBanner42_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.fourteenthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="mobileSuspendedScaffolding"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/Suspendedscaffolding12_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/Suspendedscaffolding12_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.fifteenthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="scaffoldingAccessStairs"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/SDC14429_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/SDC14429_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.sixteenthService')}
        </h3>
      </div>
      <div
        className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px]"
        id="unloadingLoadingPlatforms"
      >
        <div className="relative hover:bg-gray-900 group rounded-[17px]">
          <ImageWebp
            srcWebp='/assets/SDC14429_lossyalpha.webp'
            className="object-cover w-full h-full group-hover:opacity-50 rounded-[17px]"
            src="/assets/SDC14429_lossyalpha.webp"
            alt="Scaffolding service"
          />
          <div className="block w-full h-fit">
            <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden p-2 flex items-center">
              <div className="w-full">
                <div
                  className="transition-all transform 
                    translate-y-8 opacity-0 
                    group-hover:opacity-100 
                    group-hover:translate-y-0"
                >
                  <div className="p-2 flex justify-center items-center">
                    <a
                      href="https://wa.me/+96103322811"
                      target="_blank"
                      rel="noreferrer"
                      className="flex rtl:flex-row-reverse justify-center items-center text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[600] leading-[29px] py-[10px] px-[30px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500"
                      aria-label="Contact ACHI Scaffolding on WhatsApp"
                    >
                      <img
                        src="/assets/Whatsapp.svg"
                        className="w-[24px] mr-[10px]"
                        alt="WhatsApp"
                      />
                      {t('service.contactBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[20px] font-saira font-[700] lg:leading-[42.18px] text-[#28509E] group-hover/parent:text-[#ff8e26] transition-colors duration-300 mt-[16px] mb-[24px] lg:mt-[24px] lg:mb-[24px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[20px] capitalize">
          {t('service.seventeenthService')}
        </h3>
      </div>
   
    </motion.div>
  );

}

const Service = ({direction}) => {

  const {t} = useTranslation();

 

  return (
    <div id="service">

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-[30px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[30px] font-saira font-[700] leading-[53.3px] text-[#003A80] my-[30px] lg:mt-[30px] lg:mb-[50px] lg:leading-[73.3px]"
        >
          {t("service.title")}
        </motion.h2>
      
      {/* <GridItems index={activeSlide} t={t}/> */}
      <GridItems index={0} t={t}/>
    </div>
  );
};

export default Service;
