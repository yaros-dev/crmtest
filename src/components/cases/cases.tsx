import { Tabs } from "../tabs/tabs";
import "./cases.css";

export interface ITabsData {
  title: string;
  content: string;
}

export interface ICasesDataOnScreen {
  title: string;
  tabs: ITabsData[];
}

export function CasesSection({ tabs, title }: ICasesDataOnScreen) {
  return (
    <section className="cases__section">
      <div className="container">
        <div className="cases__section__title">{title}</div>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
}
