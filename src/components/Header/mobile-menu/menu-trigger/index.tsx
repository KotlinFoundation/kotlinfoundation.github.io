import * as React from "react";
import cn from "classnames";
import { HamburgerIcon } from "@rescui/icons";
import { CloseIcon } from "@rescui/icons";
import * as style from "./menu-trigger.module.css";

type Props = {
  className?: string;
  toggleMenu: () => void;
  isMenuOpened: boolean;
};

export const MenuTrigger: React.FC<Props> = ({ className=null, toggleMenu, isMenuOpened }) => {
  return (
    <div className={cn(className, style.menuTrigger)} onClick={toggleMenu}>
      {isMenuOpened ? <CloseIcon /> : <HamburgerIcon />}
    </div>
  );
};
