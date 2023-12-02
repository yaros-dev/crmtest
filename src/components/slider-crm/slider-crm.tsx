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
  const wrapperRef = useRef<any>(null);

  const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(false);
  const [isBlockInCenter, setIsBlockInCenter] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setSwiperIsEnd(swiper.realIndex === slides.length - 1);
    setSwiperIsBeginning(swiper.realIndex === 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const rect = wrapperRef.current.getBoundingClientRect();
      const isCenter =
        window.innerHeight / 2 >= rect.top &&
        window.innerHeight / 2 <= rect.bottom;
      console.log(isCenter);

      setIsBlockInCenter(isCenter);

      //   if (!isBlockInCenter && (swiperIsEnd || swiperIsBeginning)) {
      //     document.body.style.overflow = "auto";
      //   } else {
      //     document.body.style.overflow = "hidden";
      //   }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlockInCenter, swiperIsEnd, swiperIsBeginning]);

  useEffect(() => {
    if (!isBlockInCenter) {
      document.body.style.overflow = "auto";
      return;
    }

    if (swiperIsEnd) {
      window.scrollTo({ top: window.scrollY + 10 });
      document.body.style.overflow = "auto";
      setIsBlockInCenter(false);
    } else if (swiperIsBeginning) {
      window.scrollTo({ top: window.scrollY - 10 });
      document.body.style.overflow = "auto";
      setIsBlockInCenter(false);
    }
    setTimeout(() => {
      const rect = wrapperRef.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      console.log(centerY);
      console.log(rect.top);
      console.log(rect.bottom);

      const isCenter =
        window.innerHeight / 2 >= rect.top &&
        window.innerHeight / 2 <= rect.bottom;

      if (isCenter) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, 100);
  }, [isBlockInCenter, swiperIsEnd, swiperIsBeginning]);

  return (
    <div ref={wrapperRef} className="slider-crm-wrapper">
      <div className="container">
        <Swiper
          modules={[Mousewheel, Pagination]}
          slidesPerView={1}
          freeMode={true}
          onSlideChange={handleSlideChange}
          mousewheel={{
            releaseOnEdges: true,
          }}
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
