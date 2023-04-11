import {useCallback, useRef} from "react";
import cn from "classnames";
import {RemoveScrollBar} from "react-remove-scroll-bar";

import * as styles from "./sidebar-popup.module.css";

export function SidebarPopup({ className = null, classNameNav = null, children, isOpen, onClose }) {
    const ref = useRef(null);

    const onToggleClick = useCallback(
        e => { if (e.currentTarget == e.target) onClose(); },
        [onClose]
    );

    const classes = cn(className, styles.popup, { [styles.close]: !isOpen });

    const disableProps = {};

    if (!isOpen) {
        disableProps.tabIndex = '-1';
        disableProps.role = 'none';
    }

    return (
        <div className={classes} onClick={onToggleClick} {...disableProps}>
            {isOpen && <RemoveScrollBar/>}
            <div ref={ref} className={cn(classNameNav, styles.navigation)}>
                {children}
            </div>
        </div>
    );
}
