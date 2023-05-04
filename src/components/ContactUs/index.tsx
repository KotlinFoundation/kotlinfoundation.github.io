import { CtaBlock } from "@jetbrains/kotlin-web-site-ui/out/components/cta-block-v2";

import {Link} from "../Link";

import * as styles from "./contactUs.module.css";

const contactEmail = 'hello@kotlinfoundation.org';

export function ContactUs() {
    return (
        <CtaBlock
            topTitle={<>Ready to apply or still have questions? <br className={styles.br}/>Contact us!</>}
            classMainTitle="ktf-h2 ktf-h3--ts"
            mainTitle={
                <Link href={`mailto:${contactEmail}`} mode="clear">
                    {contactEmail}
                </Link>
            }
        />
    );
}
