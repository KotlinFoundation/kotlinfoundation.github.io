import { memo, useCallback, useContext } from "react";
import { navigate, withPrefix } from "gatsby";
import { Menu, MenuItem } from '@rescui/menu';

import {useLayoutLocation} from "../../Layout/locationContext";
import {NavigationContext, isPlatformOnly} from "../../Navigation";

import * as styles from "./side-menu.module.css";

const SlideMenuItem = memo(({title, url}) => {
    const { pathname } = useLayoutLocation();
    const { toggle } = useContext(NavigationContext);
    const isActive = pathname === withPrefix(url);

    const onClick = useCallback(e => {
        e.preventDefault();
        if (isActive) toggle(false);
        else navigate(url);
    }, [isActive, toggle, url]);

    return (
        <MenuItem className={styles.item} selected={isActive} href={url} onClick={onClick}>
            {title}
        </MenuItem>
    );
});

export function SideMenu(props) {
  const { menuItems } = useContext(NavigationContext);

  return (
    <nav {...props}>
      <Menu className={styles.list} size="l">{
          menuItems
            .filter(item => isPlatformOnly(item, 'mobile'))
            .map(item => <SlideMenuItem key={item.url || item.title} {...item}/>)
      }</Menu>
    </nav>
  );
}
