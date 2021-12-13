import * as React from "react";
import { HamburgerIcon } from "@rescui/icons";
import { CloseIcon } from "@rescui/icons";
import * as style from "./menu-trigger.module.css";

type Props = {
  toggleMenu: () => void;
  isMenuOpened: boolean;
};

export const MenuTrigger: React.FC<Props> = ({ toggleMenu, isMenuOpened }) => {
  return (
    <div className={style.menuTrigger} onClick={toggleMenu}>
      {isMenuOpened ? <CloseIcon /> : <HamburgerIcon />}
    </div>
  );
};
