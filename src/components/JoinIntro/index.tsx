import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';
import {OpenerSection} from "./Opener";

import {ShapeSection} from "./Shape";
import {BrandSection} from "./Brand";

import * as styles from "./intro.module.css";

export function Intro() {
    return (
        <div className={styles.intro}>
            <div className="ktl-layout ktl-layout--center">
                <OpenerSection/>
                <ShapeSection/>
                <BrandSection/>
            </div>
        </div>
    );
}
