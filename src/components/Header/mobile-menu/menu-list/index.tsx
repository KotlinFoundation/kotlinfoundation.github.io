import * as React from "react";
import { Link } from "gatsby";
import cn from "classnames";
import { MenuItem } from "../../types";
import * as style from "./menu-list.module.css";

type Props = {
  className?: null;
  menuItems: MenuItem[];
  toggleMenu: () => void;
};

export const MenuList: React.FC<Props> = ({
  className = null,
  menuItems,
  toggleMenu,
}) => {
  const handleWrapperClick = React.useCallback((e) => {
    if (e.currentTarget != e.target) return;
    toggleMenu();
  }, []);

  return (
    <nav className={cn(style.wrapper, className)} onClick={handleWrapperClick}>
      <ul className={`${style.menu}`}>
        <li>
          <Link
            className={style.link}
            activeClassName={style.linkActive}
            to="/"
          >
            Home
          </Link>
        </li>

        {menuItems.map((item, index) => (
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
