import css from "./HeroSection.module.css";
import heroImageMobile from "../../images/mobileImages/hero/hero_image@1x.png";
import heroImageMobile2x from "../../images/mobileImages/hero/hero_image@2x.png";
import heroImageTablet from "../../images/tabletImages/Hero/image@1x.png";
import heroImageTablet2x from "../../images/tabletImages/Hero/image@2x.png";
import { scroller } from "react-scroll";

export const HeroSection = () => {
  const scrollerToMint = () => {
    scroller.scrollTo("mint", {
      duration: 1000,
      smooth: "linear",
    });
  };

  return (
    <div className={css.heroSection}>
      <p className={css.textHero}>diD yOu seE iT ?</p>
      <h1 className={css.heroTitle}>
        <span>YACHT</span>
        <span> APES</span>
      </h1>
      <p className={css.textHeroTwo}>Apes aRe eveRywhere</p>
      <picture className={css.heroImage}>
        <source
          media="(max-width: 767px)"
          srcSet={`${heroImageMobile} 1x, ${heroImageMobile2x} 2x`}
        ></source>
        <source
          media="(min-width: 768px)"
          srcSet={`${heroImageTablet} 1x, ${heroImageTablet2x} 2x`}
        ></source>
        <img src={heroImageMobile} alt="Мавпа в окулярах"></img>
      </picture>
      <button type="button" className={css.buttonHero} onClick={scrollerToMint}>
        MEET APES
      </button>
      <p className={css.heroLastText}>
        YACHT APE IS A COLLECTION OF UNIQUE DIGITAL APES THAT YOU CAN OWN IN NFT
        FORMAT
      </p>
    </div>
  );
};
