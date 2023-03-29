import cn from "classnames";
import Button from "@rescui/button";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";
import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';

import * as styles from "./wantToLearn.module.css";

export function WantToLearn() {
    const textCn = useTextStyles();
    return (
        <div className={styles.outter}>
            <section className={cn("ktl-layout ktl-layout--center", styles.sildes)}>
                <div className={styles.image} role="none"/>
                <div className={styles.wrap}>
                    <h2 className="ktf-h2">Want to learn more?</h2>
                    <p className={cn(textCn("ktl-text-2"), styles.text)}>
                        See our presentation with the latest information <br
                        className={styles.br}/>and insights about the Kotlin Foundation.</p>
                    <Button mode="outline" size="l" href="" target="_blank">View
                        presentation</Button>
                </div>
            </section>
        </div>
    );
}
