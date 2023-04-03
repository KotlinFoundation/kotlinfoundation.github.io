import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";
import {IntroSection} from "../section";

import * as list from "../highlights.module.css";
import * as styles from "./brand.module.css";

import imgSection from "./images/section.png";
import imgSectionLarge from "./images/section-large.png";

export function BrandSection() {
    const textCn = useTextStyles();
    return <IntroSection className={styles.section} imageClassName={styles.image} image={imgSection}>
        <div className={styles.wrap}>
            <p className={cn(styles.shadow)} role="none">
                <img className={styles.image} src={imgSectionLarge} alt="" height="328" width="328"/>
            </p>
            <h2 className="ktf-h2 ktl-text--rainbow">Link your brand <br className={styles.titleBr}/>with Kotlin</h2>
            <ul className={list.highlights}>
                <li className={cn(textCn("ktl-text-2"), list.highlight, styles.useLogo)}>Use our logo to indicate that you
                    support the development <br className={styles.textBrLogo}/>of the Kotlin language through the Kotlin
                    Foundation.
                </li>
                <li className={cn(textCn("ktl-text-2"), list.highlight, styles.addLogo)}>Add your logo to kotlinfoundation.org
                    <br className={styles.textBr}/> and to a specific kotlinlang.org section.
                </li>
            </ul>
        </div>
    </IntroSection>;
}