import cross from "../../images/svg/add-sharpcrossMax.svg";
import css from "./ContactUs.module.css";
import { FormContact } from "../FormContact/FormContact";
export const ContactUS = () => {
  return (
    <section className={css.sectionContact}>
      <h1 className={css.contactTitle}>Are you in?</h1>
      <img className={css.crossImg} src={cross} alt="Cross" />
      <p className={css.contactText}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <FormContact />
    </section>
  );
};
