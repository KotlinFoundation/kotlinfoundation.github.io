import {FC} from "react";
import cn from "classnames";

import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';
import {useTextStyles} from "@rescui/typography";

import {KtlLayout} from "../KtlLayout";

import introJPG from "./intro/intro.jpg";

import * as styles from "./introBanner.module.css";

interface IntroBannerProps {
    title: string;
    members: Array<Group>
}

interface Group {
    groupName: string;
    companies: Array<Company>;
}

interface Company {
    name: string;
    image: string;
}

export const IntroBanner: FC = ({title, members}) => {
    const textCn = useTextStyles();

    return (
        <section className={styles.section}>
            <KtlLayout spacing className={styles.intro}>
                <img src={introJPG} alt="" className={styles.image}/>

                <h1 className={cn("ktf-h1 ktf-h2--tl ktf-h3--ts", styles.title)}>
                    {title}
                </h1>

                <div className={styles.companies}>
                    {members.map(({groupName, companies}) => (
                        <div className={styles.companiesGroup} key={groupName}>
                            <div className={textCn('rs-text-2', {hardness: 'hard'})}>{groupName}</div>
                            <div className={styles.companiesLogos}>
                                {companies.map(({name, image}) => (
                                    <img key={name} alt={`${name} Logo`} src={image} className={styles.companyLogo} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </KtlLayout>
        </section>
    );
};
