import css from "./HeroSection.module.css";
import heroImage from "../../images/mobileImages/hero/hero_image@1x.png";
import heroImage2x from "../../images/mobileImages/hero/hero_image@2x.png";

export const HeroSection = () => {
  return (
    <div className={css.heroSection}>
      <p className={css.textHero}>diD yOu seE iT ?</p>
      <h1 className={css.heroTitle}>YACHT APES</h1>
      <p className={css.textHero}>Apes aRe eveRywhere</p>
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet={`${heroImage} 1x, ${heroImage2x} 2x`}
        ></source>
        <img src={heroImage} alt="Мавпа в окулярах"></img>
      </picture>
      <button type="button" className={css.buttonHero}>
        MEET APES
      </button>
      <p className={css.heroLastText}>
        YACHT APE IS A COLLECTION OF UNIQUE DIGITAL APES THAT YOU CAN OWN IN NFT
        FORMAT
      </p>
    </div>
  );
};
