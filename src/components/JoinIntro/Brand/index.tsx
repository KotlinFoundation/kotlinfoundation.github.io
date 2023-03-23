import cn from "classnames";
import {IntroSection} from "../section";

import * as list from "../highlights.module.css";
import * as styles from "./brand.module.css";

import imgSection from "./images/section.png";
import imgSectionLarge from "./images/section-large.png";

export function BrandSection() {
    return <IntroSection className={styles.section} imageClassName={styles.image} image={imgSection}>
        <div className={styles.wrap}>
            <p className={cn(styles.shadow)} role="none">
                <img className={styles.image} src={imgSectionLarge} alt="" height="328" width="328"/>
            </p>
            <h2 className="ktf-h2 ktf-h2_style_rainbow">Link your brand <br className={styles.titleBr}/>with Kotlin</h2>
            <ul className={list.highlights}>
                <li className={cn("ktl-text-2", list.highlight, styles.useLogo)}>Use our logo to indicate that you
                    support the development <br className={styles.textBr}/>of the Kotlin language through the Kotlin
                    Foundation.
                </li>
                <li className={cn("ktl-text-2", list.highlight, styles.addLogo)}>Add your logo to kotlinfoundation.org
                    and to <br className={styles.textBr}/>a specific kotlinlang.org section.
                </li>
            </ul>
        </div>
    </IntroSection>;
}