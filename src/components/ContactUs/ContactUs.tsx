import {FC} from "react";
// import CtaBlock from "@jetbrains/kotlin-web-site-ui/out/components/cta-block";
import * as styles from "./contactUs.module.css";

import CtaBlock from "../CtaBlock";
import {Link} from "../Link";

const contactEmail = 'hello@kotlinfoundation.org';

export function ContactUs() {
    return (
        <CtaBlock
            topTitle={<>Ready to apply or still have questions? <br className={styles.br}/>Contact us!</>}
            mainTitle={
                <Link href={`mailto:${contactEmail}`} mode="clear" className="ktf-h2 ktf-h3--ts">
                    {contactEmail}
                </Link>
            }
        />
    );
}
