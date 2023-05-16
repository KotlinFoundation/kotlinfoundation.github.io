import cn from "classnames";
import {ThemeProvider, useTheme} from "@rescui/ui-contexts";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import * as styles from './grants.module.css';
import Button from "@rescui/button";

export function Grants({ children }) {
    return (
        <div className={styles.grants}>{children}</div>
    );
}

export function GrantsActionTheme({ action, url, children, target = '_blank'}) {
    const theme = useTheme();
    const textCn = useTextStyles();

    return (
        <div className={cn(styles.action, textCn("ktl-text-2"), { [styles.actionDark]: theme === 'dark' })}>
            {children}
            <Button className={styles.button} mode="outline" size="l" href={url} target={target}>{action}</Button>
        </div>
    );
}

export function GrantsAction({ theme, ...props }) {
    let content = <GrantsActionTheme {...props}/>;

    if(theme) content = (
        <ThemeProvider theme={theme}>
            {content}
        </ThemeProvider>
    );

    return content;
}

export function GrantsTitle({ children }) {
    return (
        <h1 className={cn("ktf-h2", styles.intro)}>{children}</h1>
    );
}
