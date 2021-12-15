import * as React from "react";
import { Link } from "gatsby";
import { MenuItem } from "../../types";
import * as style from "./menu-list.module.css";

type Props = {
  menuItems: MenuItem[];
  whiteBg: boolean;
  toggleMenu: () => void;
};

export const MenuList: React.FC<Props> = ({ menuItems, whiteBg, toggleMenu }) => {

  const handleWrapperClick = (e) => {
    if(e.currentTarget != e.target ) return;
    toggleMenu();
  }

  return (
    <nav className={style.wrapper} onClick={handleWrapperClick}>
      <ul className={`${style.menu} ${whiteBg && style.menuWhiteBg}`}>
        <li>
          <Link
            className={style.link}
            activeClassName={style.linkActive}
            to="/"
          >
            Overview
          </Link>
        </li>

        {menuItems.map((item,index) => (
          <li key={index}>
            <Link
              className={style.link}
              activeClassName={style.linkActive}
              to={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
