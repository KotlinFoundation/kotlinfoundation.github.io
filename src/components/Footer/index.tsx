import cn from "classnames";
import { useTextStyles } from '@rescui/typography';
import { ThemeProvider } from '@rescui/ui-contexts';
import * as styles from "./footer.module.css";
import svgLogo from "./jb.svg";

function FooterMarkup() {
    const textCn = useTextStyles();

    return (
        <footer className={styles.footer}>
            <ul className={cn(styles.nav, 'ktl-text-2')}>
                <li className={styles.navitem}>
                    <a
                        className={cn(styles.link,
                            textCn('rs-text-2'),
                            textCn('rs-link', { hardness: 'average', mode: 'nude' })
                        )}
                        href="" target="_blank" rel="noreferrer noopener"
                    >Submitting incompatible changes</a>
                </li>
                <li className={styles.navitem}>
                    <a
                        className={cn(styles.link,
                            textCn('rs-text-2'),
                            textCn('rs-link', { hardness: 'average', mode: 'nude' })
                        )}
                        href="" target="_blank" rel="noreferrer noopener"
                    >Language Committee guidelines</a>
                </li>
                <li className={styles.navitem}>
                    <a
                        className={cn(styles.link,
                            textCn('rs-text-2'),
                            textCn('rs-link', { hardness: 'average', mode: 'nude' })
                        )}
                        href="" target="_blank" rel="noreferrer noopener"
                    >Brand usage</a>
                </li>
                <li className={styles.navitem}>
                    <a
                        className={cn(styles.link,
                            textCn('rs-text-2'),
                            textCn('rs-link', { hardness: 'average', mode: 'nude' })
                        )}
                        href="" target="_blank" rel="noreferrer noopener"
                    >Kotlin website</a>
                </li>
            </ul>
            <p className={cn('ktl-text-3', styles.support)}>
                <span className={styles.supportlabel}>Supported and developed by</span>
                <a href="https://jetbrains.com" target="_blank" rel="noreferrer noopener"><img src={svgLogo}/></a>
            </p>
        </footer>
    );
}

export function Footer() {
    return (
        <ThemeProvider theme="dark">
            <FooterMarkup/>
        </ThemeProvider>
    )
}
