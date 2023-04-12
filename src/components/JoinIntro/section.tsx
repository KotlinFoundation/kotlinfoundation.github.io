import cn from "classnames";

import * as styles from "./section.module.css";

export function IntroSection({className = null, imageClassName = null, children, image, showImage = false}) {
    return (
        <section className={cn(className, styles.section, {[styles.showImage]: Boolean(showImage)})}>
            <p className={cn(styles.shadow, imageClassName)} role="none">
                <img className={styles.image} src={image} alt=""/>
            </p>
            {children}
        </section>
    );
}
