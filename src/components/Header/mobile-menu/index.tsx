import * as React from "react";
import { MenuTrigger } from "./menu-trigger";
import { MenuList } from "./menu-list";
import { MenuItem } from "../index";

type Props = {
  toggleMenu: () => void;
  isMenuOpened: boolean;
  menuItems: MenuItem[];
};

export const MobileMenu: React.FC<Props> = ({ toggleMenu, isMenuOpened, menuItems }) => {
  return (
    <>
      <MenuTrigger toggleMenu={toggleMenu} isMenuOpened={isMenuOpened} />
      {isMenuOpened && <MenuList menuItems={menuItems} />}
    </>
  );
};
