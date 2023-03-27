import * as React from "react";
import { Link } from "gatsby";
import * as style from "./desktop-menu.module.css";
import { MenuItem } from "../types";
import cn from "classnames";

type Props = {
  className?: string,
  menuItems: MenuItem[];
};

export function DesktopMenu({className = null, menuItems}) {
  return <ul className={cn(className, style.menu)}>
    {menuItems.map((item, index) => <li key={index} className={style.item}>
          <Link
              to={item.url}
              className={style.link}
              activeClassName={style.linkActive}
          >
            {item.title}
          </Link>
        </li>)}
  </ul>;
}
