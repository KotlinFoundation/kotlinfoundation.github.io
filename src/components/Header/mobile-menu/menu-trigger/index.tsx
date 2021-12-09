import * as React from "react";
import HamburgerIcon from "./icons/hamburger-icon.inline.svg";
import CloseIcon from "./icons/close-icon.inline.svg";
import * as style from "./menu-trigger.module.css";

type Props = {
  toggleMenu: () => void;
  isMenuOpened: boolean;
};

export const MenuTrigger: React.FC<Props> = ({ toggleMenu, isMenuOpened }) => {
  return (
    <>
      <div className={style.menuTrigger} onClick={toggleMenu}>
        {isMenuOpened ? (
          <CloseIcon />
        ) : (
          <HamburgerIcon />
        )}
      </div>
    </>
  );
};
