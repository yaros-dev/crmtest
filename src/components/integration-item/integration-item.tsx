import { IIntegrationItem } from "../integration-crm/integration-crm";

export const IntegrationItem = ({
  title,
  index,
  content,
}: IIntegrationItem) => {
  return (
    <div className="integration-crm__item">
      <div className="integration-crm__number">{index}</div>
      <div className="integration-crm__item-title">{title}</div>
      <div className="integration-crm__benefit" key={"23423dfd" + index}>
        <div className="integration-crm__box">
          <div className="integration-crm__box__title">Before</div>
          <div className="integration-crm__box__text">{content.before}</div>
        </div>
        <div className="integration-crm__box">
          <div className="integration-crm__box__title">After</div>
          <div className="integration-crm__box__text">{content.after}</div>
        </div>
      </div>
    </div>
  );
};
