import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Notiflix from "notiflix";
import css from "./FormContact.module.css";

import svgDiscord from "../../images/svg/discord.svg";
import svgMetamask from "../../images/svg/SVG_MetaMask_Icon_Color 1.svg";

export const FormContact = () => {
  const handleSubmit = (values, { resetForm }) => {
    Notiflix.Notify.success("You are already MINT'ed");
    resetForm();
  };

  const initialValues = {
    discord: "",
    metamask: "",
  };

  let userSchema = yup.object({
    discord: yup
      .string()
      .min(6, "Too short")
      .max(16, "Too Long")
      .required("Wrong discord"),
    metamask: yup
      .string()
      .min(6, "Too short")
      .max(16, "Too Long")
      .required("Wrong ADDRESS"),
  });

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        initialValues={initialValues}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className={css.contactForm}>
            <div className={css.inputWrapper}>
              <div className={css.imgInput}>
                <img
                  src={svgDiscord}
                  alt="Discord"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <Field
                placeholder="@username"
                className={`${css.contactField} ${
                  errors.discord && touched.discord && css.errBorder
                }`}
                type="text"
                name="discord"
              ></Field>
            </div>
            <div className={css.errBlock}>
              <ErrorMessage
                className={css.errorMessage}
                name="discord"
                component="div"
              />
            </div>

            <div className={css.inputWrapper}>
              <div className={css.imgInput}>
                <img
                  style={{ width: "24px", height: "24px" }}
                  src={svgMetamask}
                  alt="Metamask"
                />
              </div>
              <Field
                placeholder="Wallet address"
                className={`${css.contactField} ${
                  errors.metamask && touched.metamask && css.errBorder
                }`}
                type="text"
                name="metamask"
              ></Field>
            </div>
            <div className={css.errBlock}>
              <ErrorMessage
                className={css.errorMessage}
                name="metamask"
                component="div"
              />
            </div>
            <button className={css.buttonMint} type="submit">
              Mint
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
