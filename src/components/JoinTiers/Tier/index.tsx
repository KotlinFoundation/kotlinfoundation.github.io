import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import * as styles from './tier.module.css';

export function Tier({ className, title, price, children }) {
    const textCn = useTextStyles();
    return (
        <div className={cn(styles.tier, className)}>
            <h3 className="ktf-h2">{title}</h3>
            <div className={styles.content}>{children}</div>
            <p className={textCn("ktl-text-1")}>{price}</p>
        </div>
    );
}
