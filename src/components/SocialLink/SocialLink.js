import css from "./SocialLink.module.css";
import discordSvg from "../../images/svg/discord_black.svg";
import shipSvg from "../../images/svg/Logomark-Blue.svg";
import xSvg from "../../images/svg/logo1.svg";

export const SocialLink = () => {
  return (
    <ul className={css.navigationList}>
      <li className={css.menuButton}>
        <a href="https://discord.com/">
          <img src={discordSvg} alt="Discord" className={css.styleSvg}></img>
        </a>
      </li>
      <li className={css.menuButton}>
        <a href="https://ship.edu/academics/colleges/coehs/social_work/">
          <img src={shipSvg} alt="Ship" className={css.styleSvg}></img>
        </a>
      </li>
      <li className={css.menuButton}>
        <a href="https://twitter.com/?lang=uk">
          <img src={xSvg} alt="X-twitter" className={css.styleSvg}></img>
        </a>
      </li>
    </ul>
  );
};
