import {useCallback, useState} from "react";
import {ReactComponentLike } from "prop-types";

import {SidebarPopup} from "../SidebarPopup";

import {NavigationContext} from "./context";
import {MenuItems} from "./MenuItem";

export type NavigationProps = {
    classNamePopup?: string;
    nav: ReactComponentLike;
    sidebar: ReactComponentLike;
    items: MenuItems;
};

export function Navigation({ classNamePopup = null, nav: Navigation, sidebar: Sidebar, items } : NavigationProps) {
    const [isOpen, setOpen] = useState(false);

    const toggle = useCallback(
        val => { setOpen(val === undefined ? !isOpen : val); },
        [isOpen]
    );

    const sidebarClose = useCallback(() => { toggle(false) }, [toggle]);

    return (
        <NavigationContext.Provider value={{ menuItems: items, toggle, isOpen }}>
            <Navigation/>
            <SidebarPopup className={classNamePopup} isOpen={isOpen} onClose={sidebarClose}>
                <Sidebar/>
            </SidebarPopup>
        </NavigationContext.Provider>
    );
}

export * from './MenuItem';
export * from './context';