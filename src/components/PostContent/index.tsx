import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import cn from 'classnames';
import * as styles from './post-content.module.css';

export const DEFAULT_EXCERPT_SIZE = 300;

type PostContentProps = {
  more: JSX.Element;
  excerpt: string;
  frontmatter: {
    date: string;
    title: string;
    spoilerSize?: number;
  };
};

export function PostContent({ more, excerpt, frontmatter }: PostContentProps) {
  const textCn = useTextStyles();
  const { date, title } = frontmatter;

  const { content, isTrimmed } = postContentPreview(excerpt, frontmatter.spoilerSize);

  return (
    <>
      <p className={cn(styles.date, textCn('ktl-text-3'), 'ktl-text--gray')}>{date}</p>
      <h2 className={cn(styles.title, textCn('ktf-h3'))}>{title}</h2>
      <div className={cn(styles.content, textCn('ktl-text-2'), 'ktl-text--gray')}>{content}</div>
      {isTrimmed && more}
    </>
  );
}

export function postContentPreview(text, spoilerSize, more = null): { content: string; isTrimmed: boolean } {
  let cutContent = text.substring(0, spoilerSize || DEFAULT_EXCERPT_SIZE);

  const isTrimmed = cutContent.length !== text.length;

  // Don't show trimmed last word
  if (isTrimmed && !text[cutContent.length].match(/\s/)) {
    cutContent = cutContent.replace(/^(.+)\s+.*$/g, '$1');
  }

  const content = cutContent.split('\n\n').map((text, i, list) => {
    const isLastTrimmed = isTrimmed && i === list.length - 1;

    if (isLastTrimmed) {
      if (spoilerSize === undefined) {
        text = text.replace(/^(.+)\s+.*$/g, '$1');
      }
      text = text.trimEnd().replace(/^(.+)[.!?,]+\s*$/g, '$1');
    }

    return (
      <p key={i}>
        {text.trimEnd()}
        {isLastTrimmed && '…'}
        {more}
      </p>
    );
  });

  return {
    content,
    isTrimmed,
  };
}
