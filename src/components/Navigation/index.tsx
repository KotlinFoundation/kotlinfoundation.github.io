import {memo, useCallback, useState} from "react";
import {ReactComponentLike} from "prop-types";

import {SidebarPopup} from "../SidebarPopup";

import {NavigationContext} from "./context";
import {MenuItems} from "./MenuItem";

export type NavigationProps = {
    classNameContent?: string;
    classNamePopup?: string;
    nav: ReactComponentLike;
    sidebar: ReactComponentLike;
    items: MenuItems;
};

function NavigationStateless({
     classNamePopup: className = null,
     classNameContent = null,
     nav: Navigation,
     sidebar: Sidebar,
     items
 }: NavigationProps) {
    const [isOpen, setOpen] = useState(false);

    const toggle = useCallback(
        val => {
            setOpen(val === undefined ? !isOpen : val);
        },
        [isOpen]
    );

    const onClose = useCallback(() => {
        toggle(false);
    }, [toggle]);

    return (
        <NavigationContext.Provider value={{ menuItems: items, toggle, isOpen }}>
            <Navigation/>
            <SidebarPopup className={className} classNameContent={classNameContent} isOpen={isOpen} onClose={onClose}>
                <Sidebar/>
            </SidebarPopup>
        </NavigationContext.Provider>
    );
}

export const Navigation = memo(NavigationStateless);
export * from './MenuItem';
export * from './context';