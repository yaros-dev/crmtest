import { QuestionsItem } from "../question-item/question-item";
import { applyStylesToWords } from "../../utilites/apply-styles-to-words";
import "./questions.css";

export interface IQuestionsItem {
  title: string;
  content: string;
  onClick?: () => void;
  active?: boolean;
  index?: number;
}

export interface IQuestionsOnScreen {
  title: string;
  subTitle: string;
  items: IQuestionsItem[];
}

const styles = [
  {
    position: 3,
    style: { fontFamily: "Gallery Modern" },
  },
];

export function Questions({ title, subTitle, items }: IQuestionsOnScreen) {
  return (
    <section className="questions">
      <div className="container">
        <div className="questions__title">
          {applyStylesToWords(styles, title)}
        </div>
        <hr className="questions__divider" />
        <div className="questions__subtitle">{subTitle}</div>
        <div className="questions__accordion">
          {items?.map((item, i) => {
            return <QuestionsItem key={"21Df" + i} {...item} index={1 + i} />;
          })}
        </div>
      </div>
    </section>
  );
}
