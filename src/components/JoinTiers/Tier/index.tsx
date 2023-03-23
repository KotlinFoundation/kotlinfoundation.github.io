import cn from "classnames";

import * as styles from './tier.module.css';

export function Tier({ className, title, price, children }) {
    return (
        <div className={cn(styles.tier, className)}>
            <h3 className="ktf-h2">{title}</h3>
            <div className={styles.content}>{children}</div>
            <p className="ktl-text-1">{price}</p>
        </div>
    );
}
