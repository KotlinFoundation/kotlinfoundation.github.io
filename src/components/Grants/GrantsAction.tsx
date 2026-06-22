import { useMM } from '@jetbrains/kotlin-web-site-ui/out/components/breakpoints';
import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import Button from '@rescui/button';
import { ThemeProvider, useTheme } from '@rescui/ui-contexts';
import cn from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';

import { cls, isGrantOpen } from '../../utlis';
import * as styles from './grants.module.css';

export function Grants(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...cls(props, styles.grants)} />;
}

type GrantActionThemeProps = {
  action: string;
  url: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children: ReactNode;
};

export function GrantsActionTheme({ action, url, children, target = '_blank' }: GrantActionThemeProps) {
  const theme = useTheme();
  const textCn = useTextStyles();
  const isShortButton = useMM();

  return (
    <div className={cn(styles.action, textCn('ktl-text-2'), { [styles.actionDark]: theme === 'dark' })}>
      {children}
      <Button className={styles.button} mode="outline" size={isShortButton ? 'm' : 'l'} href={url} target={target}>
        {action}
      </Button>
    </div>
  );
}

export type GrantsActionProps = GrantActionThemeProps & {
  theme?: 'dark';
};

export function GrantsAction({ theme, ...props }: GrantsActionProps) {
  let content = <GrantsActionTheme {...props} />;

  if (theme) {
    // this ignore is needed because we can't modify ThemeProvider props and declare `children` prop explicitly as required in react 18
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content = <ThemeProvider theme={theme}>{content}</ThemeProvider>;
  }

  return content;
}

export function GrantsTitle(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...cls(props, 'ktf-h2', styles.intro)} />;
}

type GrantsHighlightProps = HTMLAttributes<HTMLDivElement> & {
  until?: string;
};

export function GrantsHighlight({ until, ...props }: GrantsHighlightProps) {
  const textCn = useTextStyles();

  // Hide the highlight once the grant program has closed.
  if (!isGrantOpen(until)) {
    return null;
  }

  return <div {...cls(props, styles.highlight, textCn('ktl-text-2'))} />;
}
