import { Leadell } from "../components/leadell/leadell";
import { Platforms } from "../components/platforms/platforms";
import { FooterSection } from "../components/footer/footer";
import { Questions } from "../components/questions/questions";
import { questionsScreenData } from "../mock/questions-screen";
import { platformsScreenData } from "../mock/platforms-screen";
import { footerScreenData } from "../mock/footer-screen";
import { leadellScreenData } from "../mock/leadell-screem";
import { sliderCrmScreenData } from "../mock/slider-crm-screen";
import { mainCrmScreenData } from "../mock/main-crm-screen";
import { MainCRMSection } from "../components/main-crm/main-crm";
import { ScrollSlider } from "../components/scroll-slider/scroll-slider";

export function CRMPage() {
  return (
    <>
      <MainCRMSection {...mainCrmScreenData} />
      <ScrollSlider {...sliderCrmScreenData} />
      <Leadell {...leadellScreenData} />
      <Platforms {...platformsScreenData} />
      <Questions {...questionsScreenData} />
      <FooterSection {...footerScreenData} />
    </>
  );
}
