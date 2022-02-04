import {FC} from "react";
import * as styles from "./contactUs.module.css";
import { CtaBlock } from "@jetbrains/kotlin-web-site-ui/dist/ctaBlock";

const contactEmail = 'hello@kotlinfoundation.org';

export const ContactUs: FC = () => (
    <CtaBlock
        topTitle={<>Have any questions? <br/>Contact us!</>}
        mainTitle={<a href={`mailto:${contactEmail}`} className={styles.ctaLink}>{contactEmail}</a>}
    />
);
