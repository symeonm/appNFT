import css from "./HeaderSection.module.css";

import logoHeaderMobile from "../../images/mobileImages/header/logo_header_mobile@1x.png";
import logoHeaderMobile2x from "../../images/mobileImages/header/logo_header_mobile@2x.png";

import discordSvg from "../../images/svg/discord_black.svg";
import shipSvg from "../../images/svg/Logomark-Blue.svg";
import xSvg from "../../images/svg/logo1.svg";

export const HeaderSection = () => {
  return (
    <header>
      <div>
        <a href="../../../public/index.html" style={{ heigth: "100%" }}>
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet={`${logoHeaderMobile} 1x, ${logoHeaderMobile2x} 2x`}
              sizes="48px"
            ></source>
            <img
              src={logoHeaderMobile}
              alt="Logo Made byapes"
              className={css.logoImage}
            ></img>
          </picture>
        </a>
      </div>
      <div className={css.socialMenu}>
        <ul className={css.navigationList}>
          <li className={css.menuButton}>
            <button type="button" className={css.menuButtonText}>
              MENU
            </button>
          </li>
          <li className={css.menuButton}>
            <a href="https://discord.com/">
              <img
                src={discordSvg}
                alt="Discord"
                className={css.discordSvg}
              ></img>
            </a>
          </li>
          <li className={css.menuButton}>
            <a href="https://ship.edu/academics/colleges/coehs/social_work/">
              <img src={shipSvg} alt="Ship" className={css.discordSvg}></img>
            </a>
          </li>
          <li className={css.menuButton}>
            <a href="https://twitter.com/?lang=uk">
              <img src={xSvg} alt="X-twitter" className={css.discordSvg}></img>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
