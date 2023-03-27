import * as React from "react";
import { MenuTrigger } from "./menu-trigger";
import { MenuList } from "./menu-list";
import { MenuItem } from "../types";
import { RemoveScrollBar } from 'react-remove-scroll-bar';

type Props = {
  className?: string;
  classNameMenu?: string;
  toggleMenu: () => void;
  isMenuOpened: boolean;
  menuItems: MenuItem[];
};

export const MobileMenu: React.FC<Props> = ({
  className=null,
  classNameMenu=null,
  toggleMenu,
  isMenuOpened,
  menuItems,
}) => {
  return (
    <>
      <MenuTrigger className={className} toggleMenu={toggleMenu} isMenuOpened={isMenuOpened} />
      {isMenuOpened && (
        <>
          <RemoveScrollBar />
          <MenuList
            className={classNameMenu}
            menuItems={menuItems}
            toggleMenu={toggleMenu}
          />
        </>
      )}
    </>
  );
};
