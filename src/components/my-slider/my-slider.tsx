import React, { useState, useRef, useEffect } from "react";
import { ISliderCrmDataOnScreen } from "../slider-crm/slider-crm";
import { SliderCrmItem } from "../slider-crm-item/slider-crm-item";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./my-slider.css";

interface SliderProps {
  slides: string[];
}

export const MySlider = ({ slides }: ISliderCrmDataOnScreen) => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-scroll-slider",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
      },
    });
  }, []);

  return (
    <>
      <div className="horizontal-scroll-slider">
        {slides.map((item, index) => (
          <section className={`panel`} key={"sdfsf" + index}>
            <SliderCrmItem {...item} />
          </section>
        ))}
      </div>
    </>
  );
};

// <div ref={sliderRef}>
//   <HorizontalScrollSlider
//     scrollHeight="500vh"
//     className="horizontal-scroll-slider"
//     header={<h2> </h2>}
//     footer={
//       <div className="pagination__wrapper">
//         <ul className="pagination">
//           {slides.map((_, index) => (
//             <li
//               key={index}
//               className={`pagination__dot ${
//                 index === activeSlideIndex ? "active-dot" : ""
//               }`}
//               onClick={() => setActiveSlideIndex(index)} // Добавьте этот обработчик для изменения активного слайда по клику на точку пагинации
//             ></li>
//           ))}
//         </ul>
//       </div>
//     }
//   >
//     <div className="slides ">
//       {slides.map((item, index) => (
//         <div
//           className={`slide ${
//             index === activeSlideIndex ? "active-slide" : ""
//           }`}
//           key={"sdfsf" + index}
//         >
//           <SliderCrmItem {...item} />
//         </div>
//       ))}
//     </div>
//   </HorizontalScrollSlider>
// </div>
