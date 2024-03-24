import logoHeaderMobile from "../../images/mobileImages/header/logo_header_mobile@1x.png";
import logoHeaderMobile2x from "../../images/mobileImages/header/logo_header_mobile@2x.png";
import css from "./LogoHeader.module.css";

export const LogoHeader = () => {
  return (
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
  );
};
