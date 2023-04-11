import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import cn from "classnames";
import {useTextStyles} from "@rescui/typography";
import * as styles from "./pagePreview.module.css";
import Button from "@rescui/button";
import { ThemeProvider } from '@rescui/ui-contexts';
import {FC} from "react";

interface PagePreviewProps {
    title: string;
    actionTitle: string;
    url: string;
    imageSrc: string;
}

export const PagePreview: FC<PagePreviewProps> = ({title, actionTitle, url, imageSrc}) => {
    return (
        <ThemeProvider theme="dark">
            <PagePreviewItem title={title} actionTitle={actionTitle} url={url} imageSrc={imageSrc} />
        </ThemeProvider>
    );
}

function PagePreviewItem({title, actionTitle, url, imageSrc}) {
    const textCn = useTextStyles();

    return (
        <div className={styles.pagePreview}>
            <h2 className={cn(styles.title, textCn('rs-h2'))} dangerouslySetInnerHTML={{__html: title}} />
            <GatsbyLink to={url}>
                <Button mode="outline" className={styles.button} size={"l"}>{actionTitle}</Button>
            </GatsbyLink>
            <img src={imageSrc} alt={""} className={styles.image} />
        </div>
    );
}