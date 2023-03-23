import cn from "classnames";
import {IntroSection} from "../section";

import * as list from "../highlights.module.css";
import * as styles from "./brand.module.css";

export function BrandSection() {
    return <IntroSection className={styles.section}>
        <div className={styles.wrap}>
            <h2 className="ktf-h2 ktf-h2_style_rainbow">Link your brand<br className={styles.titleBr}/>with Kotlin</h2>
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