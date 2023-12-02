import { ILeadellItem } from "../leadell/leadell";

export const LeadellItem = ({ title, content }: ILeadellItem) => {
  return (
    <div className="leadell__item">
      <div className="leadell__lable">{title}</div>
      <div className="leadell__text">{content}</div>
    </div>
  );
};
