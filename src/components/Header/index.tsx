import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import cn from "classnames";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import KotlinLogo from "../../images/kotlin-logo.inline.svg";

import { Link } from "../Link";
import * as style from "./header.module.css";

const menuItems = [
  {
    url: "/structure/",
    title: "Structure",
  },
  {
    url: "/faq/",
    title: "FAQ",
  },
  {
    url: "/grants/",
    title: "Grants",
  },
  {
    url: "/news/",
    title: "News",
  },
  {
    url: "/join/",
    title: "Join Foundation",
  },
];

export function Header({ path }) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleMenu = React.useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  return (
      <div className={style.header}>
        <div className={style.nav}>
          <GatsbyLink className={style.logo} to="/">
            <div className={style.logoImage}>
              <KotlinLogo/>
            </div>
            <div className={cn('ktf-h3 ktf-h4--tm', style.logoText)}>
              Kotlin Foundation
            </div>
          </GatsbyLink>
          <div className={style.headerLink}>
            <Link href="https://kotlinlang.org/" standalone external hardness="average">
              kotlinlang.org
            </Link>
          </div>
        </div>

        <div className={style.group}>
          <DesktopMenu className={style.desktopMenu} menuItems={menuItems}/>
          <Link href="/join/" className={style.joinLink} mode="clear" activeClassName={style.joinLinkActive}>
            Join
          </Link>
          <MobileMenu
              className={style.mobileMenu}
              classNameMenu={style.mobileMenu}
              toggleMenu={toggleMenu}
              isMenuOpened={isMenuOpened}
              menuItems={menuItems}
          />
        </div>
      </div>
  );
}
