import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface SubMenuItemInterface {
  label: string;
  url: string;
}
interface MenuItemInterface {
  label: string;
  url: string;
  subMenuItems?: SubMenuItemInterface[];
  handleToggleMenu?: () => void;
}

export function MenuItem(menuItem: MenuItemInterface) {
  const [isMenuItemActive, setMenuItemActive] = useState<boolean>(false);
  const [submenuHeight, setSubmenuHeight] = useState(0);
  const submenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (submenuRef.current) {
      setSubmenuHeight(isMenuItemActive ? submenuRef.current?.scrollHeight : 0);
    }
  }, [isMenuItemActive]);

  return (
    <div
      onClick={menuItem.handleToggleMenu}
      className="menu__item"
      onMouseEnter={() => setMenuItemActive(true)}
      onMouseLeave={() => setMenuItemActive(false)}
    >
      <div className="menu__label">
        <NavLink to={menuItem.url}>{menuItem.label}</NavLink>
      </div>

      {menuItem.subMenuItems && (
        <div
          className="menu__submenu__items"
          style={{
            height: isMenuItemActive ? `${submenuHeight}px` : "0",
          }}
          ref={submenuRef}
        >
          {menuItem.subMenuItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="menu__submenu__item__wrapper" key={item.url}>
                <div className="menu__submenu__icon">
                  <img src="../../../menu_arrow.svg" alt="menu_arrow" />
                </div>
                <div className="menu__submenu__item" key={index}>
                  <NavLink to={item.url}>{item.label}</NavLink>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
