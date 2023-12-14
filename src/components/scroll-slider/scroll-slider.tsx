import { AwardLines } from "../award-lines/award-lines";
import { IntegrationCrm } from "../integration-crm/integration-crm";
import { awardsScreenData } from "../../mock/awards-screen";
import { integrationScreenData } from "../../mock/integration-screen";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import "./scroll-slider.css";
import {
  IScrollSliderItem,
  ScrollSliderItem,
} from "../scroll-slider-item/scroll-slider-item";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export interface ISliderCrmDataOnScreen {
  slides: IScrollSliderItem[];
}

export function ScrollSlider({ slides }: ISliderCrmDataOnScreen) {
  const panelsContainerRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);
  const linksRef = useRef<Array<HTMLDivElement | null>>([]);
  const activeLinkRef = useRef<number>(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const sliderMy = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panelsContainer = panelsContainerRef.current!;
      const panels = panelsRef.current!;
      const links = linksRef.current!;
      const width = window.innerWidth * (panels.length - 1);

      const modifiedLength = links.length - 1;
      let snapPoints = links.map((_, i) => i / modifiedLength);
      const mySnap = gsap.utils.snap(snapPoints);
      links[activeLinkRef.current]?.classList.add("active");

      function setupScrollTweens() {
        tweenRef.current = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            pinnedContainer: ".main-slideWrapper",
            trigger: panelsContainer,
            pin: true,
            start: "top",
            scrub: 1,
            end: () => `+=${width}`,
            snap: 1 / (panels.length - 1),
            onUpdate: (self) => {
              const newIndex = mySnap(self.progress) * modifiedLength;
              if (newIndex !== activeLinkRef.current) {
                links[activeLinkRef.current]?.classList.remove("active");
                links[newIndex]?.classList.add("active");
                activeLinkRef.current = newIndex;
              }
            },
          },
        });
      }

      setupScrollTweens();

      document.querySelectorAll(".navTitle").forEach((anchor, i) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          let targetElem = null;
          if (e.target) {
            targetElem = (e.target as HTMLAnchorElement).getAttribute("href");
          }
          if (targetElem) {
            const element = document.querySelector(targetElem) as HTMLElement;
            gsap.to(window, {
              scrollTo: {
                y:
                  (tweenRef.current?.scrollTrigger?.start || 0) +
                  i * window.innerWidth,
                autoKill: false,
              },
              duration: 0.5,
            });
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="sliderCRM-Wrapper">
      <AwardLines {...awardsScreenData} />
      <div className="main-slideWrapper" ref={panelsContainerRef}>
        <div className="main-slide" ref={sliderMy}>
          {slides?.map((item, index) => (
            <div
              key={item.label + index}
              className={`slide-item item${1 + index}`}
              id={`item${1 + index}`}
              ref={(el) => (panelsRef.current![index] = el)}
            >
              <div className="item item-1">
                <ScrollSliderItem {...item} />
              </div>
            </div>
          ))}
        </div>
        <div className="navTitle-wrap">
          <div className="thumb-slider">
            {slides.map((_, index) => (
              <div
                key={index + "thumb-slider"}
                className="slide-item "
                ref={(el) => (linksRef.current![index] = el)}
              >
                <a href={`#item${1 + index}`} className="navTitle"></a>
              </div>
            ))}
          </div>
        </div>
        <IntegrationCrm {...integrationScreenData} />
      </div>
    </section>
  );
}
