import {MenuItems, Navigation} from "../Navigation";
import {Pane} from './Pane';
import {SideMenu} from "./SideMenu";

const menuItems: MenuItems = [
    {
        title: 'Home',
        url: '/',
        only: 'mobile',
    },
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

function Sidebar() {
    return <>
        <Pane sidebar/>
        <SideMenu/>
    </>;
}

export function Header () {
    return (
        <Navigation nav={Pane} sidebar={Sidebar} items={menuItems}/>
    );
}
