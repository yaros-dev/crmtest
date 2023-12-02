import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slide.css";

interface ISlider {
  setActiveaTab: (index: number) => void;
}

export const Slider: FC<ISlider> = ({ setActiveaTab }) => {
  const swiperRef: any = useRef(null);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <Swiper
      onSlideChange={(e: any) => {
        setActiveaTab(e.activeIndex);
      }}
      ref={swiperRef}
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide onClick={() => handleSlideClick(0)}>CRM</SwiperSlide>
      <SwiperSlide onClick={() => handleSlideClick(1)}>MARKETING</SwiperSlide>
      <SwiperSlide onClick={() => handleSlideClick(2)}>
        MARKETING AUTOMATION
      </SwiperSlide>
    </Swiper>
  );
};
