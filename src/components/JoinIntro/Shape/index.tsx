import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import {IntroSection} from "../section";

import * as styles from "./shape.module.css";
import * as list from "../highlights.module.css";

import imgSection from './images/section.png';
import imgSectionLarge from "./images/section-large.png";

export function ShapeSection() {
    const textCn = useTextStyles();

    return <IntroSection className={styles.section} imageClassName={styles.image} image={imgSection}>
        <div className={styles.wrap}>
            <p className={cn(styles.shadow)} role="none">
                <img className={styles.image} src={imgSectionLarge} alt="" height="400" width="400"/>
            </p>
            <h2 className={cn("ktf-h2 ktf-h2--style-rainbow", styles.title)}>Shape the future <br className={styles.titleBr}/>of the
                ecosystem</h2>
            <ul className={list.highlights}>
                <li className={cn(textCn("ktl-text-2"), list.highlight, styles.sustain)}>Help sustain the Kotlin ecosystem by
                    providing financial support and guidance to the maintainers of open-source projects.
                </li>
                <li className={cn(textCn("ktl-text-2"), list.highlight, styles.contribute)}>Contribute to the boards,
                    committees, and workgroups that make decisions on funding distribution and the Foundation’s overall
                    strategy.
                </li>
            </ul>
        </div>
    </IntroSection>;
}