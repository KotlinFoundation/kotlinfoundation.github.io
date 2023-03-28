import * as React from "react";
import cn from "classnames";
import {Link} from "../../Link";
import { MenuItem } from "../types";
import * as style from "./desktop-menu.module.css";

type Props = {
  className?: string,
  menuItems: MenuItem[];
};

export function DesktopMenu({className = null, menuItems} : Props) {
  return <ul className={cn(className, style.menu)}>
    {menuItems.map((item, index) => <li key={index} className={style.item}>
          <Link
              href={item.url}
              className={style.link}
              activeClassName={style.linkActive}
          >
            {item.title}
          </Link>
        </li>)}
  </ul>;
}
