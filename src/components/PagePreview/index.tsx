import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import Button from '@rescui/button';
import { ThemeProvider } from '@rescui/ui-contexts';
import cn from 'classnames';
import { navigate } from 'gatsby';
import { FC, useCallback } from 'react';
import * as styles from './pagePreview.module.css';

interface PagePreviewProps {
  title: string;
  actionTitle: string;
  url: string;
  imageSrc: string;
}

export const PagePreview: FC<PagePreviewProps> = ({ title, actionTitle, url, imageSrc }) => {
  return (
    // this ignore is needed because we can't modify ThemeProvider props and declare `children` prop explicitly as required in react 18
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeProvider theme="dark">
      <PagePreviewItem title={title} actionTitle={actionTitle} url={url} imageSrc={imageSrc} />
    </ThemeProvider>
  );
};

function PagePreviewItem({ title, actionTitle, url, imageSrc }: PagePreviewProps) {
  const textCn = useTextStyles();

  const onClick = useCallback((e) => {
    e.preventDefault();
    void navigate(e.target.getAttribute('href'));
  }, []);

  return (
    <div className={styles.pagePreview}>
      <h2 className={cn(styles.title, textCn('ktf-h2'))} dangerouslySetInnerHTML={{ __html: title }} />
      <Button mode="outline" onClick={onClick} href={url} className={styles.button} size={'l'}>
        {actionTitle}
      </Button>
      <img src={imageSrc} alt={''} className={styles.image} />
    </div>
  );
}
