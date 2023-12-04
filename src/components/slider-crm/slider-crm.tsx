import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SliderCrmItem,
  ISliderCrmItem,
} from "../slider-crm-item/slider-crm-item";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css";
import "./slider-crm.css";
import { useEffect, useRef, useLayoutEffect, useState } from "react";

export interface ISliderCrmDataOnScreen {
  slides: ISliderCrmItem[];
}

export const SliderCrm = ({ slides }: ISliderCrmDataOnScreen) => {
  return (
    <div className="slider-crm-wrapper">
      <div className="container">
        <Swiper
          modules={[Mousewheel, Pagination]}
          slidesPerView={1}
          mousewheel={true}
          direction={"horizontal"}
          pagination={true}
          className="slider-crm"
        >
          {slides.map((item, i) => {
            return (
              <SwiperSlide key={"dsfsdf332" + i}>
                <SliderCrmItem {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
