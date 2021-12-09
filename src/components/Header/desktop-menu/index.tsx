import * as React from "react";
import { Link } from "gatsby";
import * as style from "./desktop-menu.module.css";
import { MenuItem } from "../index";

type Props = {
  menuItems: MenuItem[];
};

export const DesktopMenu: React.FC<Props> = ({ menuItems }) => {
  return (
    <ul className={style.menu}>
      {menuItems.map((item) => (
        <li className={style.menuItem}>
          <Link
            to={item.url}
            className={style.menuLink}
            activeClassName={style.menuLinkActive}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
