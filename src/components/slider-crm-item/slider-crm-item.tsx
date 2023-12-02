import { applyStylesToWords } from "../../utilites/apply-styles-to-words";

const stylesTitle = [
  {
    position: 4,
    style: { textDecorationLine: "underline" },
  },
];

export interface ISliderCrmItem {
  title: string;
  label: string;
  subtitle: string;
}

export const SliderCrmItem = ({ title, label, subtitle }: ISliderCrmItem) => {
  return (
    <div className="slider-crm__item">
      <div className="slider-crm__item-title">
        {applyStylesToWords(stylesTitle, title)}
      </div>
      <div className="slider-crm__item-lable">{label}</div>
      <div className="slider-crm__item-subtitle">{subtitle}</div>
    </div>
  );
};
