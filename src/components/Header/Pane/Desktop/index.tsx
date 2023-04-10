import {useContext} from "react";
import cn from "classnames";

import {Link} from "../../../Link";
import {NavigationContext, isPlatformOnly} from "../../../Navigation";

import * as style from "./pane-desktop.module.css";

export function PaneDesktop({ className = null, children = null }) {
  const { menuItems } = useContext(NavigationContext);

  return (
    <ul className={cn(className, style.list)}>
      {menuItems.filter(item => isPlatformOnly(item, 'desktop')).map(({ title, url }) => (
        <li key={url || title} className={style.item}>
          <Link href={url} className={style.link} activeClassName={style.linkActive}>
            {title}
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
}
