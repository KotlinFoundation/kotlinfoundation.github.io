import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import { ThemeProvider } from '@rescui/ui-contexts';
import cn from 'classnames';
import svgLogo from '../../images/jb.svg';
import { Link } from '../Link';

import * as styles from './footer.module.css';

const FOOTER_LINKS = [
  { name: 'Language committee guidelines', url: '/language-committee-guidelines/' },
  { name: 'Submitting incompatible changes', url: '/submitting-incompatible-changes/' },
  { name: 'Brand usage', url: '/guidelines/' },
  { name: 'Kotlin website', url: 'https://kotlinlang.org' },
];

const FooterMarkup = () => {
  const textCn = useTextStyles();
  return (
    <footer className={styles.outer}>
      <div className={cn('ktl-layout ktl-layout--center', styles.footer)}>
        <ul className={cn(styles.nav, textCn('ktl-text-2'))}>
          {FOOTER_LINKS.map(({ name, url }) => (
            <li key={name} className={styles.navItem}>
              <Link mode="clear" external={false} href={url} hardness="average">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={cn(textCn('ktl-text-3'), styles.support)}>
          <a className={styles.supportLink} href="https://jetbrains.com" target="_blank" rel="noreferrer noopener">
            <img alt="JetBrains Logo" src={svgLogo} className={styles.logo} />
          </a>
          <p className={styles.supportLabel}>Supported and developed by JetBrains</p>
        </div>
      </div>
    </footer>
  );
};

export function Footer() {
  return (
    // this ignore is needed because we can't modify ThemeProvider props and declare `children` prop explicitly as required in react 18
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeProvider theme="dark">
      <FooterMarkup />
    </ThemeProvider>
  );
}
