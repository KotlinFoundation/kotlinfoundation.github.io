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
