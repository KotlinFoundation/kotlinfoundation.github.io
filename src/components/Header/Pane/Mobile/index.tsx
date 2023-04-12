import {useCallback, useContext} from "react";
import cn from "classnames";
import Button from "@rescui/button";
import {CloseIcon, HamburgerIcon} from "@rescui/icons";
import {NavigationContext} from "../../../Navigation";

import * as style from "./pane-mobile.module.css";

export function PaneMobile({ className = null, sidebar = false, children = null }) {
    const { toggle } = useContext(NavigationContext);
    const isClose = sidebar;

    const onIconClick = useCallback(() => {
        if (isClose) toggle(false);
        else toggle();
    }, [isClose, toggle]);

    return (
        <div className={cn(className, style.pane)}>
            {children}
            <Button
                mode="clear" className={style.trigger} onClick={onIconClick}
                icon={isClose ? <CloseIcon /> : <HamburgerIcon />}
                iconPosition="left"
            />
        </div>
    );
}
