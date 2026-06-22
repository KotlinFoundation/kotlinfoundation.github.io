import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';
import { useMM } from '@jetbrains/kotlin-web-site-ui/out/components/breakpoints';
import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import Button from '@rescui/button';
import { ThemeProvider } from '@rescui/ui-contexts';
import cn from 'classnames';
import { FC } from 'react';

import { isGrantOpen } from '../../utlis';
import { KtlLayout } from '../KtlLayout';
import * as styles from './grantsBanner.module.css';

interface GrantsBannerProps {
  text: string;
  action?: string;
  url?: string;
  until?: string;
}

export const GrantsBanner: FC<GrantsBannerProps> = ({ text, action = 'Apply', url = '/grants', until }) => {
  const textCn = useTextStyles('dark');
  const isShortButton = useMM();

  // Hide the banner once the grant program has closed.
  if (!isGrantOpen(until)) {
    return null;
  }

  return (
    // this ignore is needed because we can't modify ThemeProvider props and declare `children` prop explicitly as required in react 18
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeProvider theme="dark">
      <section className={styles.section}>
        <KtlLayout spacing className={styles.banner}>
          <p className={cn(styles.text, textCn('ktl-text-1'))}>{text}</p>
          <Button className={styles.button} mode="outline" size={isShortButton ? 'm' : 'l'} href={url}>
            {action}
          </Button>
        </KtlLayout>
      </section>
    </ThemeProvider>
  );
};
