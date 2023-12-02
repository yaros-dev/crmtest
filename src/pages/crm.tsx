import { AwardLines } from "../components/award-lines/award-lines";
import { awardsScreenData } from "../mock/awards-screen";
import { SliderCrm } from "../components/slider-crm/slider-crm";
import { IntegrationCrm } from "../components/integration-crm/integration-crm";
import { Leadell } from "../components/leadell/leadell";
import { Platforms } from "../components/platforms/platforms";
import { FooterSection } from "../components/footer/footer";
import { Questions } from "../components/questions/questions";
import { questionsScreenData } from "../mock/questions-screen";
import { platformsScreenData } from "../mock/platforms-screen";
import { footerScreenData } from "../mock/footer-screen";
import { leadellScreenData } from "../mock/leadell-screem";
import { integrationScreenData } from "../mock/integration-screen";
import { sliderCrmScreenData } from "../mock/slider-crm-screen";
import { mainCrmScreenData } from "../mock/main-crm-screen";
import { MainCRMSection } from "../components/main-crm/main-crm";
import { useRef, useState, useEffect } from "react";

export function CRMPage() {
  //   const wrapperRef = useRef<any>(null);

  //   const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  //   const [swiperIsBeginning, setSwiperIsBeginning] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const rect = wrapperRef.current.getBoundingClientRect();
  //       const centerY = window.innerHeight / 2;
  //       const centerBlock = rect.top <= centerY && rect.bottom >= centerY;

  //       if (centerBlock && (swiperIsBeginning || swiperIsEnd)) {
  //         document.body.style.overflow = "auto";
  //       } else {
  //         document.body.style.overflow = "hidden";
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [swiperIsEnd, swiperIsBeginning]);

  return (
    <>
      <MainCRMSection {...mainCrmScreenData} />
      <AwardLines {...awardsScreenData} />
      <SliderCrm {...sliderCrmScreenData} />
      <IntegrationCrm {...integrationScreenData} />
      <Leadell {...leadellScreenData} />
      <Platforms {...platformsScreenData} />
      <Questions {...questionsScreenData} />
      <FooterSection {...footerScreenData} />
    </>
  );
}
