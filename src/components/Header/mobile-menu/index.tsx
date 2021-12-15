import * as React from "react";
import { MenuTrigger } from "./menu-trigger";
import { MenuList } from "./menu-list";
import { MenuItem } from "../types";
import Helmet from "react-helmet";

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
          <Helmet>
            <body className="overlay-locked" />
          </Helmet>
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
