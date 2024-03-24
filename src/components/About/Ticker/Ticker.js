import css from "./Ticker.module.css";
import crossTicker from "../../../images/svg/add-sharpcrossMax.svg";

export const Ticker = () => {
  return (
    <div className={css.containerTicker}>
      <div className={css.merquee}>
        <div className={css.tickerStyle}>
          <p>HAVE NO LIMITS</p>
          <img
            src={crossTicker}
            alt="Cross"
            className={css.crossTickerStyle}
          ></img>
        </div>
        <div className={css.tickerStyle}>
          <p>HAVE NO LIMITS</p>
          <img
            src={crossTicker}
            alt="Cross"
            className={css.crossTickerStyle}
          ></img>
        </div>
      </div>
    </div>
  );
};
