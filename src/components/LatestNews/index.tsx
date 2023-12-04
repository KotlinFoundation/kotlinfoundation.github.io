import { useTM } from '@jetbrains/kotlin-web-site-ui/out/components/breakpoints';
import { useTextStyles } from '@rescui/typography';
import cn from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { Link } from '../Link';
import { postContentPreview, DEFAULT_EXCERPT_SIZE } from '../PostContent';
import * as styles from './latestNews.module.css';

export function LatestNews() {
  const isTm = useTM();
  const {
    allMdx: { nodes: posts },
  } = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, filter: { fields: { isPost: { eq: true } } }, limit: 2) {
        nodes {
          id
          excerpt(pruneLength: 10000)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoilerSize
          }
        }
      }
    }
  `);

  // For grid content for both post should be balanced
  const spoilerSize = isTm
    ? null
    : Math.min(
        ...posts.map((post) => {
          let spoilerSize = post.frontmatter?.spoilerSize;

          // For post without spoiler text length or default
          if (!spoilerSize) {
            spoilerSize = Math.min(post.excerpt.length - 1, DEFAULT_EXCERPT_SIZE);
          }

          return spoilerSize;
        })
      );

  return (
    <>
      <h2 className={cn(styles.title, 'ktf-h2')}>Latest news</h2>
      <div className={styles.news}>
        {posts.map((post, i: number) => (
          <NewsPreview
            key={post.id}
            className={styles.item}
            post={post}
            spoilerSize={spoilerSize}
            style={{ '--ktf-news-column': i + 1 }}
          />
        ))}
      </div>
    </>
  );
}

type Post = {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    spoilerSize?: number;
  };
};

type NewsPreviewProps = {
  className?: string;
  post: Post;
  spoilerSize?: number | null;
  style?: React.CSSProperties & { '--ktf-news-column': number };
};

function NewsPreview({ className = '', post, spoilerSize, ...props }: NewsPreviewProps) {
  const textCn = useTextStyles();
  const { date, title, spoilerSize: postSpoilerSize } = post.frontmatter;
  const classes = cn(styles.more, textCn('rs-link', { hardness: 'average' }));

  const { content } = useMemo(
    () =>
      postContentPreview(
        post.excerpt,
        spoilerSize || postSpoilerSize,
        <Link href={post.fields.slug} className={classes}>
          Read&nbsp;more
        </Link>
      ),
    [post, spoilerSize]
  );

  return (
    <div {...props} className={className}>
      <div className={cn(textCn('rs-text-3'), styles.date)}>{date}</div>
      <h3 className={cn(textCn('rs-h3'), styles.previewTitle)}>{title}</h3>
      <div className={cn(textCn('rs-text-2'), styles.text)}>{content}</div>
    </div>
  );
}
