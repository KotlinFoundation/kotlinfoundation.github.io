import {memo} from "react";
import {MenuItems, Navigation} from "../Navigation";
import {Pane} from './Pane';
import {SideMenu} from "./SideMenu";

import * as styles from './header.module.css';

const menuItems: MenuItems = [
    {
        title: 'Home',
        url: '/',
        only: 'mobile',
    },
    {
        url: "/news/",
        title: "News",
    },
    {
        url: "/structure/",
        title: "Structure",
    },
    {
        url: "/grants/",
        title: "Grants",
    },
    {
        url: "/faq/",
        title: "FAQ",
    },
    {
        url: "/join/",
        title: "Join Foundation",
    },
];

function Sidebar() {
    return <>
        <Pane sidebar/>
        <SideMenu className={styles.sideMenu}/>
    </>;
}

function HeaderStateless () {
    return (
        <Navigation nav={Pane} sidebar={Sidebar} classNamePopup={styles.popup} classNameContent={styles.nav} items={menuItems}/>
    );
}

export const Header = memo(HeaderStateless);
