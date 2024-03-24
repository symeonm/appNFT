import css from "./SocialLink.module.css";
import discordSvg from "../../images/svg/discord_black.svg";
import shipSvg from "../../images/svg/Logomark-Blue.svg";
import xSvg from "../../images/svg/logo1.svg";

export const SocialLink = ({ isOpenMenu }) => {
  return (
    <ul className={css.navigationList}>
      <li className={isOpenMenu ? css.menuButtonMobile : css.menuButton}>
        <a href="https://discord.com/">
          <img
            style={{
              filter: isOpenMenu ? "invert(100%) brightness(200%)" : "",
            }}
            src={discordSvg}
            alt="Discord"
            className={css.styleSvg}
          ></img>
        </a>
      </li>
      <li className={isOpenMenu ? css.menuButtonMobile : css.menuButton}>
        <a href="https://ship.edu/academics/colleges/coehs/social_work/">
          <img
            style={{
              filter: isOpenMenu ? "invert(100%) brightness(200%)" : "",
            }}
            src={shipSvg}
            alt="Ship"
            className={css.styleSvg}
          ></img>
        </a>
      </li>
      <li className={isOpenMenu ? css.menuButtonMobile : css.menuButton}>
        <a href="https://twitter.com/?lang=uk">
          <img
            style={{
              filter: isOpenMenu ? "invert(100%) brightness(200%)" : "",
            }}
            src={xSvg}
            alt="X-twitter"
            className={css.styleSvg}
          ></img>
        </a>
      </li>
    </ul>
  );
};
