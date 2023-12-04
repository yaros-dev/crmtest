import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import "./scroll.css";
import { applyStylesToWords } from "../../utilites/apply-styles-to-words";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const stylesTitle = [
  {
    position: 4,
    style: { textDecorationLine: "underline" },
  },
];

export default function Scroll({ slides }) {
  const panelsContainerRef = useRef(null);
  const panelsRef = useRef([]);
  const linksRef = useRef([]);
  const activeLinkRef = useRef(0);
  const tweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panelsContainer = panelsContainerRef.current;
      const panels = panelsRef.current;
      const links = linksRef.current;

      const width = window.innerWidth * (panels.length - 1);
      const modifiedLength = links.length - 1;

      let snapPoints = links.map((_, i) => i / modifiedLength);
      const mySnap = gsap.utils.snap(snapPoints);
      links[activeLinkRef.current].classList.add("active");

      function setupScrollTweens() {
        tweenRef.current = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: panelsContainer,
            pin: true,
            scrub: 0.1,
            end: () => {
              const containerWidth = panelsContainerRef.current.offsetWidth;
              const panelWidth = containerWidth / panels.length;
              return `+=${panelWidth * panels.length}`;
            },
            snap: 1 / (panels.length - 1),
            onUpdate: (self) => {
              const newIndex = mySnap(self.progress) * modifiedLength;
              if (newIndex !== activeLinkRef.current) {
                linksRef.current[activeLinkRef.current].classList.remove(
                  "active"
                );
                linksRef.current[newIndex].classList.add("active");
                activeLinkRef.current = newIndex;
              }
            },
          },
        });
      }

      setupScrollTweens();

      const range = gsap.utils.mapRange(
        0,
        width,
        0,
        tweenRef.current.scrollTrigger.end
      );

      document.querySelectorAll(".navTitle").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          let targetElem = document.querySelector(
            e.target.getAttribute("href")
          );
          gsap.to(window, {
            scrollTo: {
              y: () => range(targetElem.offsetLeft),
              autoKill: false,
            },
            duration: 0.5,
          });
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="main-slideWrapper" ref={panelsContainerRef}>
      <div className="main-slide">
        <div
          className="slide-item item1"
          id="item1"
          ref={(el) => (panelsRef.current[0] = el)}
        >
          <div className="item item-1">
            <div className="slider-crm__item">
              <div className="slider-crm__item-title">
                {applyStylesToWords(
                  stylesTitle,
                  "Why Leadell for Your Zoho CRM Integration?"
                )}
              </div>
              <div className="slider-crm__item-lable">Tailored Solutions</div>
              <div className="slider-crm__item-subtitle">
                We don't just integrate; we align Zoho CRM's vast capabilities
                with your specific business objectives
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide-item item2"
          id="item2"
          ref={(el) => (panelsRef.current[1] = el)}
        >
          <div className="item item-2">
            <div className="slider-crm__item">
              <div className="slider-crm__item-title">
                {applyStylesToWords(
                  stylesTitle,
                  "Why Leadell for Your Zoho CRM Integration?"
                )}
              </div>
              <div className="slider-crm__item-lable">Tailored Solutions</div>
              <div className="slider-crm__item-subtitle">
                We don't just integrate; we align Zoho CRM's vast capabilities
                with your specific business objectives
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide-item item3"
          id="item3"
          ref={(el) => (panelsRef.current[2] = el)}
        >
          <div className="item item-3">
            <div className="slider-crm__item">
              <div className="slider-crm__item-title">
                {applyStylesToWords(
                  stylesTitle,
                  "Why Leadell for Your Zoho CRM Integration?"
                )}
              </div>
              <div className="slider-crm__item-lable">Tailored Solutions</div>
              <div className="slider-crm__item-subtitle">
                We don't just integrate; we align Zoho CRM's vast capabilities
                with your specific business objectives
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navTitle-wrap">
        <div className="thumb-slider">
          <div className="slide-item " ref={(el) => (linksRef.current[0] = el)}>
            <a href="#item1" className="navTitle"></a>
          </div>
          <div className="slide-item " ref={(el) => (linksRef.current[1] = el)}>
            <a href="#item2" className="navTitle"></a>
          </div>
          <div className="slide-item " ref={(el) => (linksRef.current[2] = el)}>
            <a href="#item3" className="navTitle"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Scroll({ slides }) {
//   const panels = useRef([]);
//   const panelsContainer = useRef();
//   const createPanelsRefs = (panel, index) => {
//     if (panels) {
//       panels.current[index] = panel;
//     }
//   };
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const animatedPanels = panels.current.slice(0, 3);
//       const totalAnimatedPanels = animatedPanels.length;

//       gsap.to(animatedPanels, {
//         xPercent: -100 * (totalAnimatedPanels - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: panelsContainer.current,
//           endTrigger: "",
//           pin: true,
//           scrub: 1,
//           snap: 1 / (totalAnimatedPanels - 1),

//           end: () => {
//             const containerWidth = panelsContainer.current.offsetWidth;
//             const panelWidth = containerWidth / totalAnimatedPanels;
//             return `+=${panelWidth * totalAnimatedPanels}`;
//           },
//         },
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <div className="container-scroll" ref={panelsContainer}>
//         {slides?.map((item, index) => {
//           <section
//             key={index}
//             className=" panel "
//             ref={(e) => createPanelsRefs(e, 0)}
//           >
//             <div>
//               <div className="slider-crm__item">
//                 <div className="slider-crm__item-title">{item.title}</div>
//                 <div className="slider-crm__item-lable">{item.label}</div>
//                 <div className="slider-crm__item-subtitle">{item.subtitle}</div>
//               </div>
//             </div>
//           </section>;
//         })}
//       </div>
//     </>
//   );
// }

// {
//   /* <div className="pagination__wrapper">
//   <ul className="pagination">
//     <li className={` pagination__dot`}></li>
//     <li className={` pagination__dot`}></li>
//     <li className={` pagination__dot`}></li>
//   </ul>
// </div>; */
// }

//   const panels = useRef([]);
//   const panelsContainer = useRef();
//   const endContainer = useRef();

//

//   useEffect(() => {
//     const animatedPanels = panels.current.slice(0, 3);
//     const totalAnimatedPanels = animatedPanels.length;

//     gsap.to(animatedPanels, {
//       xPercent: -100 * (totalAnimatedPanels - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: panelsContainer.current,
//         endTrigger: "",
//         pin: true,
//         // scrub: 0.1,
//         snap: 1 / (totalAnimatedPanels - 1),

//         end: () => {
//           const containerWidth = panelsContainer.current.offsetWidth;
//           const panelWidth = containerWidth / totalAnimatedPanels;
//           return `+=${panelWidth * totalAnimatedPanels}`;
//         },
//       },
//     });
//   }, [])
