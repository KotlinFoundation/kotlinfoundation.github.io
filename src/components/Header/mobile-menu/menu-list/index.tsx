import * as React from "react";
import { Link } from "gatsby";
import { MenuItem } from "../../index";
import * as style from "./menu-list.module.css";

type Props = {
  menuItems: MenuItem[];
  whiteBg: boolean;
};

export const MenuList: React.FC<Props> = ({ menuItems, whiteBg }) => {
  return (
    <nav className={style.wrapper}>
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
