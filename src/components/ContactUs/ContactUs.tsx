import {FC} from "react";
// import CtaBlock from "@jetbrains/kotlin-web-site-ui/out/components/cta-block";
import { useTS } from '@jetbrains/kotlin-web-site-ui/out/components/breakpoints';
import * as styles from "./contactUs.module.css";

import CtaBlock from "../CtaBlock";
import {Link} from "../Link";

const contactEmail = 'hello@kotlinfoundation.org';

export function ContactUs() {
    const isTS = useTS();
    const classes = isTS ? 'ktl-h3' : 'ktf-h2';

    return (
        <CtaBlock
            topTitle={<>Ready to apply or still have questions?<br/>Contact us!</>}
            mainTitle={
                <Link href={`mailto:${contactEmail}`} mode="clear" className={classes}>
                    {contactEmail}
                </Link>
            }
        />
    );
}
