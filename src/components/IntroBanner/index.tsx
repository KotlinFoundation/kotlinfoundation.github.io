import {FC} from "react";
import cn from "classnames";

import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';

import {KtlLayout} from "../KtlLayout";

import introJPG from "./intro/intro.jpg";

import jbLogoSvg from "../../images/jb.svg";
import googleLogoSvg from "./companies/google.svg";

import * as styles from "./introBanner.module.css";

const SPONSORS = [
    { name: 'Google', image: googleLogoSvg },
    { name: 'JetBrains', image: jbLogoSvg },
];

export const IntroBanner: FC = ({titleDesktop, titleMobile}) => (
    <section className={styles.section}>
        <KtlLayout spacing className={styles.intro}>
            <h1 className="ktf-h1 ktf-h2--tl">
                <span className={styles.titleDesktop}>{titleDesktop}</span>
                <span className={styles.titleMobile}>{titleMobile}</span>
            </h1>
            <div className={styles.companies}>
                <h2 className={cn("ktf-h3 ktf-h4--ts", styles.companiesLabel)}>Сompanies<br/>behind Kotlin</h2>
                {SPONSORS.map(({name, image}) => {
                    const id = name[0].toUpperCase() + name.substring(1).toLowerCase();
                    return (
                        <p key={id} className={cn(styles.company, styles[`company${id}`])}>
                            <img alt={`${name} Logo`} src={image} className={styles.companyImage}/>
                        </p>
                    );
                })}
            </div>
            <picture className={styles.picture}>
                {/*<source type="image/webp" srcSet={`${introWebp} 1x, ${intro2xWebp} 2x`} />*/}
                <img src={introJPG} alt="Funny Kotlin Constructor" className={styles.image}/>
            </picture>
        </KtlLayout>
    </section>
);
