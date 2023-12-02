import { LeadellItem } from "../leadell-item/leadell";
import "./leadell.css";

export interface ILeadellItem {
  title: string;
  content: string;
}

export interface ILeadellDataOnScreen {
  title: string;
  items: ILeadellItem[];
}

export function Leadell({ title, items }: ILeadellDataOnScreen) {
  return (
    <section className="leadell">
      <div className="container">
        <div className="leadell__title">{title}</div>
        <div className="leadell__items">
          {items?.map((item, i) => {
            return <LeadellItem key={"21vcvDff" + i} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
