import cn from "classnames";
import {CloseIcon, HamburgerIcon} from "@rescui/icons";

import * as style from "./pane-mobile.module.css";
import {useCallback, useContext} from "react";
import {NavigationContext} from "../../../Navigation";

export function PaneMobile({ className = null, sidebar = false, children = null }) {
    const { toggle } = useContext(NavigationContext);
    const isClose = sidebar;

    const onIconClick = useCallback(() => {
        if (isClose) toggle(false);
        else toggle();
    }, [isClose, toggle]);

    return (
        <div className={className}>
            {children}
            <div className={style.trigger} onClick={onIconClick}>
                {isClose ? <CloseIcon /> : <HamburgerIcon />}
            </div>
        </div>
    );
}
