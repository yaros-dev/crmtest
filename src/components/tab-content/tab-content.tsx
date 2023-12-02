import { RunningLine } from "../running-line/running-line";
import "./tab-content.css";

export interface TabContentProps {
  content: string;
}

export function TabContent({ content }: TabContentProps) {
  return (
    <div className="tabs__content">
      <RunningLine text={content} direction="right" styles="running-line" />
      <RunningLine text={content} direction="left" styles="running-line" />
      <RunningLine text={content} direction="right" styles="running-line" />
    </div>
  );
}
