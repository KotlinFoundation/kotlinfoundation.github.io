import * as React from "react";
import Button from "@rescui/button";
import { MobileMenu } from "./mobile-menu/";
import { DesktopMenu } from "./desktop-menu";
import KotlinLogo from "../../images/kotlin-logo.inline.svg";
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
];

export type MenuItem = {
  url: string;
  title: string;
};

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);

  const toggleMenu = React.useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  return (
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.logo}>
          <div className={style.logoImage}>
            <KotlinLogo />
          </div>
          <div className={style.logoText}>
            Kotlin <br className={style.mobileBr} /> Foundation
          </div>
        </div>
        <a
          href="https://kotlinlang.org/"
          className={style.headerLink}
          target="_blank"
          rel="noopener"
        >
          kotlinlang.org ↗
        </a>
      </div>

      <div className={style.group}>
        <DesktopMenu menuItems={menuItems} />
        <Button className={style.button}>Write Us</Button>
        <MobileMenu
          toggleMenu={toggleMenu}
          isMenuOpened={isMenuOpened}
          menuItems={menuItems}
        />
      </div>
    </div>
  );
};
