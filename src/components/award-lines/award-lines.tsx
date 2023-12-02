import { RunningLine } from "../running-line/running-line";
import "./award-lines.css";

export interface IAwardLines {
  lineOne: string;
  lineTwo: string;
}

export const AwardLines = ({ lineOne, lineTwo }: IAwardLines) => {
  return (
    <div className="award-lines__wrapper">
      <RunningLine
        text={lineOne}
        direction="right"
        styles={"award-lines"}
        speed={50}
      />
      <RunningLine
        text={lineTwo}
        direction="left"
        styles={"award-lines style-normal"}
        speed={50}
      />
    </div>
  );
};
