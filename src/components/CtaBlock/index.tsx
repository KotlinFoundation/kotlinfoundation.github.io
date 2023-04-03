import cn from "classnames";
import {ThemeProvider} from "@rescui/ui-contexts";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import * as styles from './cta-block.module.css';

export function CtaBlock({ topTitle, mainTitle }) {
    const textCn = useTextStyles();
    return (
            <div className={styles.root}>
                <div className="ktl-layout ktl-layout--center">
                    <p className={cn(styles.topTitle, textCn('ktl-text-3'))}>{topTitle}</p>
                    {mainTitle}
                </div>
            </div>
    );
}

export default props => (
    <ThemeProvider theme="dark">
        <CtaBlock {...props}/>
    </ThemeProvider>
);