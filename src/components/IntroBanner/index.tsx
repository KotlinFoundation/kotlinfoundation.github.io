import {FC} from "react";
import cn from "classnames";
import introWebp from "../../images/intro/intro.webp";
import intro2xWebp from "../../images/intro/intro@2x.webp";
import introPng from "../../images/intro/intro.png";
import intro2xPng from "../../images/intro/intro@2x.png";
import jbLogoSvg from "../../images/companies/jb.svg";
import googleLogoSvg from "../../images/companies/google.svg";

import * as styles from "./introBanner.module.css";

const SPONSORS = [
    { name: 'JetBrains', image: jbLogoSvg },
    { name: 'Google', image: googleLogoSvg },
];


export const IntroBanner: FC = ({children}) => (
    <section className={cn(styles.introWrap)}>
        <div className={cn(styles.intro, "ktl-container")}>
            <div className={styles.introContent}>
                <h1 className="ktl-hero ktl-offset-top-xl">
                    {children}
                </h1>
                <div className="ktl-offset-top-xxl">
                    <h2 className="ktl-h3">Companies Behind Kotlin</h2>
                    <ul className={cn(styles.companies, 'ktl-offset-top-l', 'ktl-offset-bottom-l')}>
                        {SPONSORS.map(({ name, image }) => (
                            <li key={name} className={styles.company}>
                                <img alt={`${name} Logo`} src={image}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <picture className={styles.introImage}>
                <source type="image/webp" srcSet={`${introWebp} 798w, ${intro2xWebp} 1596w`} sizes="798px"/>
                <img
                    width="798"
                    height="841"
                    sizes="798px"
                    src={introPng}
                    srcSet={`${introPng} 798w, ${intro2xPng} 1596w`}
                    alt="Funny Kotlin Constructor"
                />
            </picture>
        </div>
    </section>
);