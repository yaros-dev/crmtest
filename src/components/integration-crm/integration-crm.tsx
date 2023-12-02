import { IntegrationItem } from "../integration-item/integration-item";
import "./integration-crm.css";

export interface IIntegrationItemContent {
  before: string;
  after: string;
}

export interface IIntegrationItem {
  title: string;
  content: IIntegrationItemContent;
  index?: number;
}

export interface IIntegrationDataOnScreen {
  title: string;
  items: IIntegrationItem[];
}

export function IntegrationCrm({ title, items }: IIntegrationDataOnScreen) {
  return (
    <section className="integration-crm">
      <div className="container">
        <div className="integration-crm__title">{title}</div>
        <div className="integration-crm__items">
          {items?.map((item, i) => {
            return (
              <IntegrationItem key={"21vcvDff" + i} {...item} index={1 + i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
