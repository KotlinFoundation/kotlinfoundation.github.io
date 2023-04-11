import {useCallback, useContext} from "react";
import {Link, navigate, withPrefix} from "gatsby";

import {usePath} from "../../Layout/pathContext";
import {isPlatformOnly, NavigationContext} from "../../Navigation";

import * as styles from "./side-menu.module.css";
import cn from "classnames";

function SlideMenuItem({title, url}) {
    const path = usePath();
    const { toggle } = useContext(NavigationContext);
    const isActive = path === withPrefix(url);

    const onClick = useCallback(
        () => { if (isActive) toggle(false); },
        [isActive, toggle]
    );

    return (
        <li>
            <Link className={cn(styles.link, isActive && styles.active)} to={url} onClick={onClick}>{title}</Link>
        </li>
    );
}

export function SideMenu(props) {
  const { menuItems } = useContext(NavigationContext);

  return (
    <nav {...props}>
      <ul className={styles.list}>{
          menuItems
            .filter(item => isPlatformOnly(item, 'mobile'))
            .map(item => <SlideMenuItem key={item.url || item.title} {...item}/>)
      }</ul>
    </nav>
  );
}
