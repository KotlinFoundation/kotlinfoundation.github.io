import * as React from "react";
import {navigate} from "gatsby";
import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";
import * as styles from "./pagePreview.module.css";
import Button from "@rescui/button";
import { ThemeProvider } from '@rescui/ui-contexts';
import {FC, useCallback} from "react";

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

    const onClick = useCallback(
        e => { e.preventDefault(); navigate(e.target.getAttribute('href')) },
        [navigate]
    );

    return (
        <div className={styles.pagePreview}>
            <h2 className={cn(styles.title, textCn('ktf-h2'))} dangerouslySetInnerHTML={{__html: title}} />
            <Button mode="outline"  onClick={onClick} href={url} className={styles.button} size={"l"}>{actionTitle}</Button>
            <img src={imageSrc} alt={""} className={styles.image} />
        </div>
    );
}