import css from "./ButtonsSlider.module.css";
import { useSwiper } from "swiper/react";

export const ButtonsSlider = () => {
  const swiper = useSwiper();

  return (
    <div className={css.btnSlider}>
      <button
        type="button"
        className={css.btnPrevNext}
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </button>
      <button
        type="button"
        className={css.btnPrevNext}
        onClick={() => swiper.slideNext()}
      >
        Next
      </button>
    </div>
  );
};
