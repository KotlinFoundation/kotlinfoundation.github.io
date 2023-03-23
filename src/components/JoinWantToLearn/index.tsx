import cn from "classnames";
import Button from "@rescui/button";
import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';

import * as styles from "./wantToLearn.module.css";

export function WantToLearn() {
    return (
        <div className={styles.outter}>
            <section className={cn("ktl-layout ktl-layout--center", styles.sildes)}>
                <div className={styles.image} role="none"/>
                <div className={styles.wrap}>
                    <h2 className="ktf-h2">Want to learn more?</h2>
                    <p className={cn("ktl-text-2", styles.text)}>See our presentation slides that contain latest information <br
                        className={styles.br}/>and insights related to the Kotlin Foundation.</p>
                    <Button className={styles.presentation} mode="outline" href="" target="_blank">View
                        presentation</Button>
                </div>
            </section>
        </div>
    );
}
