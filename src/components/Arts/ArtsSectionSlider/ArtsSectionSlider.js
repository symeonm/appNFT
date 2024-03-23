import css from "./ArtSectionSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Ape1mob1x from "../../../images/mobileImages/arts/Ape1mob1x-min.jpg";
import Ape1mob2x from "../../../images/mobileImages/arts/Ape1mob2x-min.jpg";
import Ape2mob1x from "../../../images/mobileImages/arts/Ape2mob1x-min.jpg";
import Ape2mob2x from "../../../images/mobileImages/arts/Ape2mob2x-min.jpg";
import Ape3mob1x from "../../../images/mobileImages/arts/Ape3mob1x-min.jpg";
import Ape3mob2x from "../../../images/mobileImages/arts/Ape3mob2x-min.jpg";
import Ape4mob1x from "../../../images/mobileImages/arts/Ape4mob1x-min.jpg";
import Ape4mob2x from "../../../images/mobileImages/arts/Ape4mob2x-min.jpg";
import Ape5mob1x from "../../../images/mobileImages/arts/Ape5mob1x-min.jpg";
import Ape5mob2x from "../../../images/mobileImages/arts/Ape5mob2x-min.jpg";
import Ape6mob1x from "../../../images/mobileImages/arts/Ape6mob1x-min.jpg";
import Ape6mob2x from "../../../images/mobileImages/arts/Ape6mob2x-min.jpg";
import Ape7mob1x from "../../../images/mobileImages/arts/Ape7mob1x-min.jpg";
import Ape7mob2x from "../../../images/mobileImages/arts/Ape7mob2x-min.jpg";
import Ape8mob1x from "../../../images/mobileImages/arts/Ape8mob1x-min.jpg";
import Ape8mob2x from "../../../images/mobileImages/arts/Ape8mob2x-min.jpg";

import Ape1big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape1big1x-min.jpg";
import Ape1big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape1big2x-min.jpg";
import Ape2big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape2big1x-min.jpg";
import Ape2big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape2big2x-min.jpg";
import Ape3big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape3big1x-min.jpg";
import Ape3big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape3big2x-min.jpg";
import Ape4big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape4big1x-min.jpg";
import Ape4big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape4big2x-min.jpg";
import Ape5big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape5big1x-min.jpg";
import Ape5big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape5big2x-min.jpg";
import Ape6big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape6big1x-min.jpg";
import Ape6big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape6big2x-min.jpg";
import Ape7big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape7big1x-min.jpg";
import Ape7big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape7big2x-min.jpg";
import Ape8big1x from "../../../images/ArtsSection/ArtsTabDesk/Ape8big1x-min.jpg";
import Ape8big2x from "../../../images/ArtsSection/ArtsTabDesk/Ape8big2x-min.jpg";
import { ButtonsSlider } from "../../ButtonsSlider/ButtonSlider";

const dataArts = [
  {
    id: 1,
    alt: "Clown monkey",
    artsMob1x: Ape1mob1x,
    artsMob2x: Ape1mob2x,
    artsBig1x: Ape1big1x,
    artsBig2x: Ape1big2x,
  },
  {
    id: 2,
    alt: "The monkey is a star",
    artsMob1x: Ape2mob1x,
    artsMob2x: Ape2mob2x,
    artsBig1x: Ape2big1x,
    artsBig2x: Ape2big2x,
  },
  {
    id: 3,
    alt: "A monkey in glasses",
    artsMob1x: Ape3mob1x,
    artsMob2x: Ape3mob2x,
    artsBig1x: Ape3big1x,
    artsBig2x: Ape3big2x,
  },
  {
    id: 4,
    alt: "A monkey with an earring",
    artsMob1x: Ape4mob1x,
    artsMob2x: Ape4mob2x,
    artsBig1x: Ape4big1x,
    artsBig2x: Ape4big2x,
  },
  {
    id: 5,
    alt: "A monkey in a cap",
    artsMob1x: Ape5mob1x,
    artsMob2x: Ape5mob2x,
    artsBig1x: Ape5big1x,
    artsBig2x: Ape5big2x,
  },
  {
    id: 6,
    alt: "A monkey with a beard",
    artsMob1x: Ape6mob1x,
    artsMob2x: Ape6mob2x,
    artsBig1x: Ape6big1x,
    artsBig2x: Ape6big2x,
  },
  {
    id: 7,
    alt: "A monkey with big ears",
    artsMob1x: Ape7mob1x,
    artsMob2x: Ape7mob2x,
    artsBig1x: Ape7big1x,
    artsBig2x: Ape7big2x,
  },
  {
    id: 8,
    alt: "Monkey with a bottle",
    artsMob1x: Ape8mob1x,
    artsMob2x: Ape8mob2x,
    artsBig1x: Ape8big1x,
    artsBig2x: Ape8big2x,
  },
];

export const ArtSectionSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={24}
      modules={[Navigation]}
    >
      {dataArts.map((item) => (
        <SwiperSlide className={css.swiperSlider} key={item.id}>
          <picture>
            <source
              srcSet={`${item.artsBig1x} 1x, ${item.artsBig2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${item.artsBig1x} 1x, ${item.artsBig2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${item.artsMob1x} 1x, ${item.artsMob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img
              className={css.imageStyle}
              src={item.artsMob1x}
              alt={item.alt}
              loading="lazy"
            />
          </picture>
        </SwiperSlide>
      ))}
      <ButtonsSlider />
    </Swiper>
  );
};
