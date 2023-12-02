import React, { useEffect, useRef, useState } from "react";
import "./menu.css";
import { MenuItem } from "../menu-item/menu-item";
import { useMenuContext } from "./menuContext";
import {NavLink} from "react-router-dom";

export function Menu({ isHomePage }: { isHomePage: boolean }) {
  const [isActiveState, setActiveState] = useState(false);
  const [isClosing, setClosing] = useState(false);
  const menuRef: any = useRef(null);

  const { currentMenuState } = useMenuContext();

  const handleToggleMenu = () => {
    if (isActiveState) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    document.body.style.overflow = "hidden";
    setActiveState(true);
    currentMenuState({ isMenuOpened: true });
  };

  const closeMenu = () => {
    document.body.style.overflow = "inherit";
    setClosing(true);
    setActiveState(false);
    currentMenuState({ isMenuOpened: false });

    setTimeout(() => {
      setClosing(false);
    }, 250);
  };

  const handleDocumentClick = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      isActiveState
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isActiveState, handleDocumentClick]);

  return (
    <React.Fragment>
      <span
        onClick={(e: any) => {
          e.stopPropagation();
          handleToggleMenu();
        }}
        style={{ color: isHomePage ? "white" : "black" }}
      >
        menu
      </span>
      <button
        className={`${isActiveState ? "hamburger is-active" : "hamburger"} ${
          isClosing ? "closing" : ""
        } ${!isHomePage ? "hamburger_black" : ""}`}
        onClick={(e: any) => {
          e.stopPropagation();
          handleToggleMenu();
        }}
      >
        <div className="bar"></div>
      </button>
      <nav
        ref={menuRef}
        className={isActiveState ? "nav_menu is-active" : "nav_menu"}
      >
        <div className="menu__container">
          <div className="menu__social_section">
            <div className="menu__header">Social</div>
            <a href="#" onClick={handleToggleMenu}>
              LinkedIn
            </a>
            <a href="#" onClick={handleToggleMenu}>
              Instagram
            </a>
            <a href="#" onClick={handleToggleMenu}>
              YouTube
            </a>
            <a href="#" onClick={handleToggleMenu}>
              Twitter
            </a>
            <a href="#" onClick={handleToggleMenu}>
              GitHub
            </a>
          </div>
          <div className="menu__main_section">
            <div className="menu__header">Menu</div>
            <MenuItem
              handleToggleMenu={handleToggleMenu}
              label={"Home"}
              url={"/"}
            />
            <MenuItem
              handleToggleMenu={handleToggleMenu}
              label={"CRM"}
              url={"/crm"}
              subMenuItems={[
                { label: "Zoho", url: "/rreer" },
                { label: "HubSpot", url: "/ererw2" },
              ]}
            />
            <MenuItem
              handleToggleMenu={handleToggleMenu}
              label={"Marketing"}
              url={"/mark"}
              subMenuItems={[
                { label: "1", url: "/ere3er" },
                { label: "2", url: "/4tertr" },
              ]}
            />
            <MenuItem
              handleToggleMenu={handleToggleMenu}
              label={"Marketing Automation"}
              url={"/rrrr"}
              subMenuItems={[
                { label: "1", url: "/erer" },
                { label: "2", url: "/rfgv" },
              ]}
            />
          </div>
        </div>
        <div className="menu__footer">
          <div className="menu__footer__contact_section">
            <div className="menu__header">Get in touch</div>
            <p>
              <a href="mailto:welcome@leadell.agency">welcome@leadell.agency</a>
            </p>
          </div>
          <div className="menu__footer__privacy">
            <NavLink onClick={() => handleToggleMenu()} to={"/privacy"}>Privacy Policy</NavLink>
          </div>
        </div>
        {/* <div className='menu__container'></div> */}
      </nav>
    </React.Fragment>
  );
}
