import cn from "classnames";
import { ThemeProvider } from '@rescui/ui-contexts';
import svgLogo from "./jb.svg";
import {Link} from "../Link";

import * as styles from "./footer.module.css";

function FooterLink({...props}) {
    return <Link {...props} external={false} target="_blank"/>
}

const FOOTER_LINKS = [
    { name: 'Submitting incompatible changes', url: 'https://kotlinlang.org/docs/submitting-incompatible-changes.html'},
    { name: 'Language Committee guidelines', url: 'https://kotlinlang.org/docs/language-committee-guidelines.html'},
    { name: 'Brand Usage', url: 'https://kotlinlang.org/docs/guidelines.html'},
    { name: 'Kotlin website', url: 'http://kotlinlang.org'},
];

const FooterMarkup = () => (
    <footer className={styles.footer}>
        <ul className={cn(styles.nav, 'ktl-text-2')}>
            {FOOTER_LINKS.map(({ name, url }) => (
                <li key={name} className={styles.navitem}>
                    <FooterLink href={url} className={styles.link}>{name}</FooterLink>
                </li>
            ))}
        </ul>
        <p className={cn('ktl-text-3', styles.support)}>
            <span className={styles.supportlabel}>Supported and developed by</span>
            <a href="https://jetbrains.com" target="_blank" rel="noreferrer noopener"><img alt="JetBrains Logo" src={svgLogo}/></a>
        </p>
    </footer>
);

export function Footer() {
    return (
        <ThemeProvider theme="dark">
            <FooterMarkup/>
        </ThemeProvider>
    )
}
