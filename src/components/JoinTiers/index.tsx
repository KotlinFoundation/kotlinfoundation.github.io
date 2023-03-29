import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";
import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';

import {Tier} from "./Tier";
import * as styles from "./tiers.module.css";

export function Tiers() {
    const textCn = useTextStyles();
    return (
        <section className={styles.outer}>
            <div className={cn("ktl-layout ktl-layout--center", styles.tiers)}>
                <Tier
                    className={styles.item}
                    title="Silver tier"
                    price="$30,000/year"
                >
                    <p className={cn(textCn("ktl-text-2"), "ktf-para")}>Opportunity for a seat on the Foundation’s board (1 seat for every 5
                        Silver members).</p>
                    <p className={cn(textCn("ktl-text-2"), "ktf-para")}>Eligible to participate in the Operating and Trademark Committee.</p>
                    <p className={cn(textCn("ktl-text-2"), "ktf-para")}>Your logo can appear on both the Kotlin and Kotlin Foundation websites.</p>
                </Tier>
                <Tier
                    className={styles.item}
                    title="Gold tier"
                    price="$150,000/year"
                >
                    <p className={cn(textCn("ktl-text-2"), "ktf-para")}>All Silver tier benefits, except when superseded by Gold level benefits.</p>
                    <p className={cn(textCn("ktl-text-2"), "ktf-para")}>1 seat for every gold member in the Foundation board.</p>
                    <p className={cn(textCn("ktl-text-2"), "ktf-para")}>Eligible for role of Secretary.</p>
                </Tier>
            </div>
        </section>
    );
}