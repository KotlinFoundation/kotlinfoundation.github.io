import {useContext} from "react";
import {Link} from "gatsby";

import {isPlatformOnly, NavigationContext} from "../../Navigation";

import * as styles from "./side-menu.module.css";

export function SideMenu(props) {
  const { menuItems } = useContext(NavigationContext);

  return (
    <nav {...props}>
      <ul className={styles.list}>
        {menuItems.filter(item => isPlatformOnly(item, 'mobile')).map(({title, url}) => (
          <li key={url || title}>
            <Link className={styles.link} activeClassName={styles.active} to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
