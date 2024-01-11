import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import Button from '@rescui/button';
import { ThemeProvider, useTheme } from '@rescui/ui-contexts';
import cn from 'classnames';
import { HTMLAttributes } from 'react';
import { cls } from '../../utlis';
import * as styles from './grants.module.css';

export function Grants(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...cls(props, styles.grants)} />;
}

type GrantActionThemeProps = {
  action: string;
  url: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children?: JSX.Element;
};

export function GrantsActionTheme({ action, url, children, target = '_blank' }: GrantActionThemeProps) {
  const theme = useTheme();
  const textCn = useTextStyles();

  return (
    <div className={cn(styles.action, textCn('ktl-text-2'), { [styles.actionDark]: theme === 'dark' })}>
      {children}
      <Button className={styles.button} mode="outline" size="l" href={url} target={target}>
        {action}
      </Button>
    </div>
  );
}

type GrantsActionProps = GrantActionThemeProps & {
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
