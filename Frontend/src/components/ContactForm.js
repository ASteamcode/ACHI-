import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = ({ decreaseMargin }) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactMessage: "",
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required("Name is Required"),
      contactEmail: Yup.string().email("Invalid email address").required("Email is Required"),
      contactPhone: Yup.string().required("Phone is Required"),
      contactMessage: Yup.string().required("Message is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const sectionTitleId = "contactFormTitle";
  const sectionDescId = "contactFormDesc";

  const nameErrorId = "contactNameError";
  const emailErrorId = "contactEmailError";
  const phoneErrorId = "contactPhoneError";
  const messageErrorId = "contactMessageError";

  const showNameError = !!(formik.errors.contactName && formik.touched.contactName);
  const showEmailError = !!(formik.errors.contactEmail && formik.touched.contactEmail);
  const showPhoneError = !!(formik.errors.contactPhone && formik.touched.contactPhone);
  const showMessageError = !!(formik.errors.contactMessage && formik.touched.contactMessage);

  const describe = (hasError, errorId) => (hasError ? errorId : undefined);

  return (
    <section
      className={`bg-[#28509E] w-full ${decreaseMargin ? "mt-[30px]" : "mt-[100px]"}`}
      id="contactForm"
      aria-labelledby={sectionTitleId}
      aria-describedby={sectionDescId}
    >
      <div className="max-w-[1450px] mx-auto px-[20px] py-[55px] lg:py-[65px]">
        <p id={sectionDescId} className="sr-only">
          Request scaffolding information or technical support from ACHI Scaffolding. Submit your name, email, phone number, and message.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[70px] items-center">
          <div className="w-full">
            <motion.h3
              id={sectionTitleId}
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[18px] text-white lg:hidden"
            >
              {t("contactForm.titleMobile")}
            </motion.h3>

            <form onSubmit={formik.handleSubmit} className="w-full" noValidate>
              <label htmlFor="contactName" className="sr-only">
                {t("inputs.namePlaceholder") || "Name"}
              </label>
              <input
                id="contactName"
                name="contactName"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder={t("inputs.namePlaceholder")}
                autoComplete="name"
                required
                aria-invalid={showNameError ? "true" : "false"}
                aria-describedby={describe(showNameError, nameErrorId)}
                className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  showNameError ? "border-red-500 placeholder-red-500" : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              />
              {showNameError ? (
                <p
                  id={nameErrorId}
                  className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]"
                >
                  *{formik.errors.contactName}
                </p>
              ) : null}

              <label htmlFor="contactEmail" className="sr-only">
                {t("inputs.emailPlaceholder") || "Email"}
              </label>
              <input
                id="contactEmail"
                name="contactEmail"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder={t("inputs.emailPlaceholder")}
                autoComplete="email"
                inputMode="email"
                required
                aria-invalid={showEmailError ? "true" : "false"}
                aria-describedby={describe(showEmailError, emailErrorId)}
                className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  showEmailError ? "border-red-500 placeholder-red-500" : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              />
              {showEmailError ? (
                <p
                  id={emailErrorId}
                  className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]"
                >
                  *{formik.errors.contactEmail}
                </p>
              ) : null}

              <label htmlFor="contactPhone" className="sr-only">
                {t("inputs.phonePlaceholder") || "Phone"}
              </label>
              <input
                id="contactPhone"
                name="contactPhone"
                value={formik.values.contactPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={t("inputs.phonePlaceholder")}
                required
                aria-invalid={showPhoneError ? "true" : "false"}
                aria-describedby={describe(showPhoneError, phoneErrorId)}
                className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  showPhoneError ? "border-red-500 placeholder-red-500" : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              />
              {showPhoneError ? (
                <p
                  id={phoneErrorId}
                  className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]"
                >
                  *{formik.errors.contactPhone}
                </p>
              ) : null}

              <label htmlFor="contactMessage" className="sr-only">
                {t("inputs.messagePlaceholder") || "Message"}
              </label>
              <textarea
                id="contactMessage"
                name="contactMessage"
                value={formik.values.contactMessage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows="4"
                placeholder={t("inputs.messagePlaceholder")}
                required
                aria-invalid={showMessageError ? "true" : "false"}
                aria-describedby={describe(showMessageError, messageErrorId)}
                className={`w-full resize-none my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  showMessageError ? "border-red-500 placeholder-red-500" : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              ></textarea>
              {showMessageError ? (
                <p
                  id={messageErrorId}
                  className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]"
                >
                  *{formik.errors.contactMessage}
                </p>
              ) : null}

              <button
                type="submit"
                className="text-[15px] 2xl:text-[20px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-rubik font-[500] leading-[29px] py-[10px] px-[20px] bg-[#FF8E26] rounded-[20px] uppercase hover:bg-transparent border-solid border-2 border-[#FF8E26] transition duration-500 mt-[18px] w-[55%] md:w-[40%] lg:hidden"
                aria-label={t("contactForm.btnText") || "Submit contact form"}
              >
                {t("contactForm.btnText")}
              </button>
            </form>
          </div>

          <div className="hidden lg:flex flex-col items-start justify-center pl-[180px]">
            <motion.h3
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Rajdhani] text-[50px] font-[700] uppercase mb-[18px] text-white pl-[0px]"
            >
              {t("contactForm.titleDesktop")}
            </motion.h3>

            <button
              type="button"
              onClick={formik.submitForm}
              className="text-[25px] text-white font-rubik font-[500] leading-[29px] py-[10px] px-[30px] bg-[#FF8E26] rounded-[20px] uppercase hover:bg-transparent border-solid border-2 border-[#FF8E26] transition duration-500 w-[150px] ml-[40px]"
              aria-label={t("contactForm.btnText") || "Submit contact form"}
            >
              {t("contactForm.btnText")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
