import Marquee from "react-fast-marquee";
import "./running-line.css";
import { FC } from "react";

export interface IRunningLine {
  text: string;
  direction: "left" | "right";
  styles?: string;
  speed?: number;
}

export const RunningLine: FC<IRunningLine> = ({
  text,
  direction,
  styles,
  speed,
}) => {
  return (
    <div className={styles}>
      <Marquee direction={direction} speed={speed}>
        {text}
        {text}
        {text}
        {text}
        {text}
      </Marquee>
    </div>
  );
};
