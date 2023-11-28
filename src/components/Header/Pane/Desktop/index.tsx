import cn from 'classnames';
import { useContext } from 'react';
import { Link } from '../../../Link';
import { NavigationContext, isPlatformOnly } from '../../../Navigation';
import * as style from './pane-desktop.module.css';

type PaneDesktopProps = {
  className?: string;
  children?: JSX.Element;
};

export function PaneDesktop({ className = null, children = null }: PaneDesktopProps) {
  const { menuItems } = useContext(NavigationContext);

  return (
    <ul className={cn(className, style.list)}>
      {menuItems
        .filter((item) => isPlatformOnly(item, 'desktop'))
        .map(({ title, url }) => (
          <li key={url || title}>
            <Link href={url} className={style.link} activeClassName={style.linkActive}>
              {title}
            </Link>
          </li>
        ))}
      {children}
    </ul>
  );
}
