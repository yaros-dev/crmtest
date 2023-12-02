import { useState } from "react";
import { IQuestionsItem } from "../questions/questions";
import { applyStylesToWords } from "../../utilites/apply-styles-to-words";

const styles = [
  {
    position: 1,
    style: { fontWeight: "600" },
  },
  {
    position: 2,
    style: { fontWeight: "600" },
  },
];

export const QuestionsItem = ({ title, content, index }: IQuestionsItem) => {
  const [active, setActive] = useState(index === 1);

  const toggleActiveItem = () => {
    setActive(!active);
  };
  return (
    <div
      className="questions__accordion__item"
      onClick={toggleActiveItem}
      key={"sdfsd" + index}
    >
      <div className="questions__accordion__title_wrapper">
        <span>{active ? "-" : "+"} </span>
        <div className="questions__accordion__title">
          {index}. {title}
        </div>
      </div>
      <div
        className={`questions__accordion__content ${active && "active-item"}`}
      >
        {applyStylesToWords(styles, content)}
      </div>
    </div>
  );
};
