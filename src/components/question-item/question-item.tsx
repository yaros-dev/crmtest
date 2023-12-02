import { useState } from "react";
import { IQuestionsItem } from "../questions/questions";
import { applyStylesToWords } from "../../utilites/apply-styles-to-words";
import { Collapse } from "react-collapse";
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
  const [isOpened, setIsOpened] = useState(false);
  const height = 100;

  const toggleActiveItem = () => {
    setActive(!active);
    setIsOpened(!isOpened);
  };
  return (
    <>
      {/* <div className="questions__accordion__item" key={"sdfsd" + index}>
        <div
          className="questions__accordion__title_wrapper"
          onClick={toggleActiveItem}
        >
          <span>{isOpened ? "-" : "+"} </span>
          <div className="questions__accordion__title">
            {index}. {title}
          </div>
        </div>
        <Collapse isOpened={isOpened}>
          <div
            style={{ height }}
            className={`questions__accordion__content ${
              isOpened && "active-item"
            }`}
          >
            {applyStylesToWords(styles, content)}
          </div>
        </Collapse>
      </div> */}
      <div className="questions__accordion__item" key={"sdfsd" + index}>
        <div
          className="questions__accordion__title_wrapper"
          onClick={toggleActiveItem}
        >
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
    </>
  );
};
