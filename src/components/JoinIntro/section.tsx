import cn from "classnames";

import * as styles from "./section.module.css";

export function IntroSection({ className = null, children, showImage = false }) {
    return (
        <section className={cn(className, styles.section, { [styles.imageAlways]: Boolean(showImage) })}>
            {children}
        </section>
    );
}
