import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import Button from "@rescui/button";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import KotlinLogo from "../../images/kotlin-logo.inline.svg";
import * as style from "./header.module.css";

import { Link } from "../Link";

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

type Props = {
  whiteBg: boolean;
};

export const Header: React.FC<Props> = ({ whiteBg }) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);

  const toggleMenu = React.useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  return (
    <div className={`${style.header} ${whiteBg && style.headerWhite}`}>
      <div className={style.nav}>
        <GatsbyLink className={style.logo} to="/">
          <div className={style.logoImage}>
            <KotlinLogo />
          </div>
          <div className={style.logoText}>
            Kotlin <br className={style.mobileBr} /> Foundation
          </div>
        </GatsbyLink>
        <div className={style.headerLink}>
          <Link href="https://kotlinlang.org/" standalone external hardness="average">
            kotlinlang.org
          </Link>
        </div>
      </div>

      <div className={style.group}>
        <DesktopMenu menuItems={menuItems} />
        <a href="mailto:hello@kotlinfoundation.org">
          <Button className={style.button}>Write Us</Button>
        </a>
        <MobileMenu
          toggleMenu={toggleMenu}
          isMenuOpened={isMenuOpened}
          menuItems={menuItems}
          whiteBg={whiteBg}
        />
      </div>
    </div>
  );
};
