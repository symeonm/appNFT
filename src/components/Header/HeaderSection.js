import css from "./HeaderSection.module.css";
import { useState } from "react";

import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { SocialLink } from "../SocialLink/SocialLink";
import { LogoHeader } from "../LogoHeader/LogoHeader";

export const HeaderSection = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header>
      <LogoHeader />
      <div className={css.socialMenu}>
        <button
          type="button"
          className={css.menuButtonText}
          onClick={toggleMenu}
        >
          MENU
        </button>
        <SocialLink />
      </div>
      {isOpenMenu && (
        <BurgerMenu isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
      )}
    </header>
  );
};
