import cn from "classnames";
import Button from "@rescui/button";
import * as styles from "../components/MainPage/MainPage.module.css";
import Layout from "../components/Layout";
import googleLogoSvg from "../components/MainPage/companies/google.svg";
import jbLogoSvg from  "../components/MainPage/companies/jb.svg";
import {Link} from "gatsby";

const SPONSORS = [
    { name: 'JetBrains', image: jbLogoSvg },
    { name: 'Google', image: googleLogoSvg },
];

export default function MainPage() {
    return <Layout
        title="Kotlin Foundation"
        whiteHeader

        intro={
            <section className={cn(styles.intro, "ktl-container")}>
                <div className={styles.introContent}>
                    <h1 className="ktl-hero ktl-offset-top-xl">
                        Protect, promote and{'\u00A0'}advance the{'\u00A0'}development of{'\u00A0'}the{'\u00A0'}Kotlin programming language
                    </h1>
                    <div className="ktl-offset-top-xxl">
                        <h2 className="ktl-h3">Сompanies Behind Kotlin</h2>
                        <ul className={cn(styles.companies, 'ktl-offset-top-l', 'ktl-offset-bottom-l')}>
                            {SPONSORS.map(({ name, image }) => (
                                <li key={name} className={styles.company}>
                                    <img alt={`${name} Logo`} src={image}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        }

        children={
            <div className={cn(styles.info, 'ktl-offset-top-xxl')}>
                <section className={styles.goals}>
                    <h2 className="ktl-h2 ktl-offset-bottom-l">Key Goals</h2>
                    <ul className={cn(styles.goalsList, 'ktl-text-1')}>
                        <li className={cn(styles.goal, styles.goalTrademark)}>Protect the Kotlin trademarks</li>
                        <li className={cn(styles.goal, styles.goalDesigner)}>Appoint the Lead Language Designer</li>
                        <li className={cn(styles.goal, styles.goalControl)}>Control incompatible changes to the language</li>
                    </ul>
                </section>

                <section className={cn(styles.structureButton, 'ktl-offset-bottom-xl', 'ktl-offset-top-xl')}>
                    <p>
                        <Link to="/structure/"><Button mode="outline">Foundation Structure →</Button></Link>
                    </p>
                </section>

                <section className={styles.now}>
                    <h2 className="ktl-h2 ktl-offset-bottom-l">Kotlin Now</h2>
                    <ul className={cn(styles.nowList, 'ktl-text-1')}>
                        <li className={cn(styles.numbers)}>
                            <p className="ktl-hero">5M</p>
                            <p>developers used Kotlin over the last 12 months</p>
                        </li>
                        <li className={cn(styles.numbers)}>
                            <p className="ktl-hero">250K</p>
                            <p>new repositories were created on GitHub in 2021</p>
                        </li>
                        <li className={cn(styles.numbers)}>
                            <p className="ktl-hero">190</p>
                            <p>universities all over the world are teaching Kotlin</p>
                        </li>
                    </ul>
                </section>
            </div>
        }

        outro={
            <section>
                <h2 className="ktl-h2 ktl-container ktl-offset-top-xxl">Look How We’ve<br/>Grown Up</h2>
                ...
            </section>
        }
    />;
}
