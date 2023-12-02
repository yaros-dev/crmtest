import React from "react";
import "./main.css";
import { useMenuContext } from "../menu/menuContext";
import { useLocation } from "react-router-dom";
// import { gsap } from "gsap";
// import { styled } from "styled-components";

export interface IMainWordsOnScreen {
  title: string;
  subTitle: string;
  highlightedWord?: string;
  changedWord?: string;
  italicWord?: string;
  about?: string;
}

interface MainSectionProps {
  item: IMainWordsOnScreen;
}

export function MainSection({ item }: MainSectionProps) {
  const { menuState } = useMenuContext();
  const { pathname } = useLocation();

  const title = item.title;
  const subTitle = item.subTitle;
  const highlightedWord = item.highlightedWord;
  // const italicWord = item.italicWord
  const about = item.about;

  let formattedTitle: React.ReactNode = title;

  if (highlightedWord !== undefined) {
    const startPosition = title.indexOf(highlightedWord);

    if (startPosition !== -1) {
      const endPosition = startPosition + highlightedWord.length;
      formattedTitle = (
        <>
          {title.substring(0, startPosition)}
          <span
            style={
              menuState && menuState.isMenuOpened
                ? { border: "1px solid rgba(255, 255, 255, 0.3)" }
                : { border: "1px solid rgba(255, 255, 255, 1)" }
            }
          >
            {title.substring(startPosition, endPosition)}
          </span>
          {title.substring(endPosition)}
        </>
      );
    }
  }

  return (
    <section
      className={`main__section ${pathname === "/crm" && "main__section--p"}`}
    >
      <div className="container">
        <div className="main__section__wrapper">
          <div
            className="main__section__title"
            style={
              menuState && menuState.isMenuOpened
                ? { color: "rgba(255, 255, 255, 0.3)" }
                : { color: "white" }
            }
          >
            {formattedTitle}
          </div>
          <div className="main__section__subtitle">{subTitle}</div>
          {pathname === "/crm" && (
            <div className="main__section__about">{about}</div>
          )}
        </div>
      </div>
    </section>
  );
}
