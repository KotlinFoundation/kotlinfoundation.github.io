import * as React from "react";
import { MenuTrigger } from "./menu-trigger";
import { MenuList } from "./menu-list";
import { MenuItem } from "../types";
import { RemoveScrollBar } from 'react-remove-scroll-bar';

type Props = {
  toggleMenu: () => void;
  isMenuOpened: boolean;
  menuItems: MenuItem[];
  whiteBg: boolean;
};

export const MobileMenu: React.FC<Props> = ({
  toggleMenu,
  isMenuOpened,
  menuItems,
  whiteBg,
}) => {
  return (
    <>
      <MenuTrigger toggleMenu={toggleMenu} isMenuOpened={isMenuOpened} />
      {isMenuOpened && (
        <>
          <RemoveScrollBar />
          <MenuList
            menuItems={menuItems}
            whiteBg={whiteBg}
            toggleMenu={toggleMenu}
          />
        </>
      )}
    </>
  );
};
