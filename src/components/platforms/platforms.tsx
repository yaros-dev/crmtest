import { Link } from "../link/link";
import PlatformsItem from "../platforms-item/platforms-item";
import "./platforms.css";

export interface IIPlatformsItemContent {
  name: string;
}

export interface IPlatformsItem {
  title: string;
  link: string;
  about: string;
  awards: IIPlatformsItemContent[];
}

export interface IPlatformsDataOnScreen {
  title: string;
  subtitle: string;
  items: IPlatformsItem[];
}

export function Platforms({ title, subtitle, items }: IPlatformsDataOnScreen) {
  return (
    <section className="platforms">
      <div className="container">
        <div className="platforms__title">{title}</div>
        <div className="platforms__subtitle">{subtitle}</div>
        <div className="platforms__items">
          {items?.map((item, i) => {
            return <PlatformsItem key={"21Dff" + i} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
