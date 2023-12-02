import React from "react";
import { MainSection } from "../components/main/main";
import { UnlockSection } from "../components/unlock/unlock";
import { AutomationSection } from "../components/automation/automation";
import { MarketingSection } from "../components/marketing/marketing";
import { FooterSection } from "../components/footer/footer";
import { CasesSection } from "../components/cases/cases";
import { DescribeSection } from "../components/describe/describe";
import { mainScreenData } from "../mock/main-screen";
import { unlockScreenData } from "../mock/unlock-screen";
import { marketingScreenData } from "../mock/marketing-screen";
import { automationScreenData } from "../mock/automation-screen";
import { describeScreenData } from "../mock/describe-screen";
import { footerScreenData } from "../mock/footer-screen";
import { casesScreenData } from "../mock/cases-screen";

export function Home() {
  return (
    <React.Fragment>
      <MainSection item={mainScreenData} />
      <UnlockSection {...unlockScreenData} />
      <MarketingSection {...marketingScreenData} />
      <AutomationSection {...automationScreenData} />
      <CasesSection {...casesScreenData} />
      <DescribeSection {...describeScreenData} />
      <FooterSection {...footerScreenData} />
    </React.Fragment>
  );
}
