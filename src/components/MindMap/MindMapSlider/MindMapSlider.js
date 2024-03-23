import css from "./MindMapSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ButtonsSlider } from "../../ButtonsSlider/ButtonSlider";

import arrowUp from "../../../images/svg/VectorVectorCard.svg";

import "swiper/css";
import "swiper/css/navigation";

export const MindMapSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={24}
      modules={[Navigation]}
    >
      <SwiperSlide className={css.swiperSlider}>
        <div className={css.cardContent}>
          <p className={css.cardText}>
            All owners of APE NFTs
            <br /> and all future <br />
            collections will receive <br />a percentage of sales
            <br /> based on the number of
            <br /> NFTs they own
          </p>
          <h3 className={css.cardTitle}>YAPE DROP</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.swiperSlider}>
        <div className={css.cardContent}>
          <p className={css.cardText}>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </p>
          <h3 className={css.cardTitle}>New Collection</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.swiperSlider}>
        <div className={css.cardContent}>
          <p className={css.cardText}>
            Launch your own token, <br />
            the proceeds of which <br />
            will go to a global fund
            <br />
            to LAUNCH YACHT CLUB AND PROMOTE it
          </p>
          <h3 className={css.cardTitle}>Token</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className={css.swiperSlider}>
        <a
          href="https://drive.google.com/file/d/1TXx2aeiTGV-jdEaVTkm55jSygtqdIXVB/view?usp=drive_link"
          className={css.cardContent}
        >
          <img src={arrowUp} alt="Arrow Up" className={css.arrowUpStyle}></img>
          <h3 className={css.cardTitle}>
            Learn
            <br />
            more
            <br /> in mind map
          </h3>
        </a>
      </SwiperSlide>
      <ButtonsSlider />
    </Swiper>
  );
};
