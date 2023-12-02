import { useState } from "react";
import { TabContent } from "../tab-content/tab-content";
import { ITabsData } from "../cases/cases";
import "./tabs.css";
import { Slider } from "../slider/slider";

interface TabsProps {
  tabs: ITabsData[];
}

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState<number>(0);

  const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(+e.currentTarget.dataset.index!);
  };

  return (
    <div>
      <div className="container_tabs">
        <div className="cases__section__tabs_mob">
          <Slider setActiveaTab={setActive} />
        </div>

        <div className="cases__section__tabs">
          {tabs.map((tab, i) => (
            <button
              title={tab.title}
              className={`cases__section__tabs_item ${
                i === active ? "active__tab" : ""
              }`}
              onClick={openTab}
              data-index={i}
              key={i++}
              style={{ position: "relative" }}
            >
              <span className="tab_title">{tab.title}</span>
              <span style={{ position: "absolute", left: 0 }}>{tab.title}</span>
            </button>
          ))}
        </div>
      </div>
      {tabs[active] && <TabContent {...tabs[active]} />}
    </div>
  );
}
