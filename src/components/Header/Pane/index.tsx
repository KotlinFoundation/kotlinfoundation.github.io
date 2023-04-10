import cn from "classnames";

import {Link} from "../../Link";
import {Logo} from "../Logo";

import {PaneDesktop} from "./Desktop";
import {PaneMobile} from "./Mobile";
import {JoinLink} from "../Join";

import * as style from './pane.module.css';

export function Pane({ className = null, sidebar = false }) {
    const isTop = !sidebar;

    return (
        <div className={cn(className, style.pane, {
            [style.sidebar]: sidebar,
            [style.paneTop]: isTop,
        })}>
            <div className={style.logo}>
                <Logo sidebar={sidebar}/>
                {isTop && (
                    <div className={style.kotlinlang}>
                        <Link href="https://kotlinlang.org/" standalone external hardness="average">
                            kotlinlang.org
                        </Link>
                    </div>
                )}
            </div>
            <div className={style.nav}>
                {isTop && <PaneDesktop className={style.desktop}/>}
                <PaneMobile sidebar={sidebar} className={style.mobile}>
                    {isTop && <JoinLink/>}
                </PaneMobile>
            </div>
        </div>
    );
}