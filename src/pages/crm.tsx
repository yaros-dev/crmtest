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
import { MySlider } from "../components/my-slider/my-slider";
import Scroll from "../components/scroll/scroll";

export function CRMPage() {
  return (
    <>
      <MainCRMSection {...mainCrmScreenData} />
      <AwardLines {...awardsScreenData} />
      <Scroll {...sliderCrmScreenData} />
      {/* <MySlider {...sliderCrmScreenData} /> */}
      {/* <SliderCrm {...sliderCrmScreenData} /> */}
      <IntegrationCrm {...integrationScreenData} />

      <Leadell {...leadellScreenData} />
      <Platforms {...platformsScreenData} />
      <Questions {...questionsScreenData} />
      <FooterSection {...footerScreenData} />
    </>
  );
}
