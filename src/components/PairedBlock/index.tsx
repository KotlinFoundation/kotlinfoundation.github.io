import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import cn from "classnames";
import * as styles from "./pairedBlock.module.css";

export function PairedBlock({left, right}) {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                {left}
            </div>
            <div className={styles.item}>
                {right}
            </div>
        </div>
    );
}
