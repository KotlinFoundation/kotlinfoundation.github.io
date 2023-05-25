import {useMemo} from 'react';
import cn from "classnames";
import {graphql, useStaticQuery} from "gatsby";
import {useTextStyles} from "@rescui/typography";
import {useTM} from "@jetbrains/kotlin-web-site-ui/out/components/breakpoints";

import {postContentPreview, DEFAULT_EXCERPT_SIZE} from "../PostContent";
import {Link} from "../Link";

import * as styles from "./latestNews.module.css";

export function LatestNews() {
    const textCn = useTextStyles();
    const isTm = useTM();
    const { allMdx: { nodes: posts } } = useStaticQuery(graphql`
        query {
            allMdx(
                sort: {frontmatter: {date: DESC}}
                filter: {fields: {isPost: {eq: true}}}
                limit: 2
            ) {
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
    let spoilerSize = isTm ? null : Math.min(...posts.map(post => {
         let spoilerSize = post.frontmatter?.spoilerSize;

         // For post without spoiler text length or default
         if (!spoilerSize) spoilerSize = Math.min(
             post.excerpt.length - 1,
             DEFAULT_EXCERPT_SIZE
         );

         return spoilerSize;
    }));

    return (
        <>
            <h2 className={cn(styles.title, textCn('rs-h2'))}>Latest news</h2>
            <div className={styles.news}>{posts.map((post, i) => (
                <NewsPreview
                    key={post.id}
                    className={styles.item}
                    post={post}
                    spoilerSize={spoilerSize}
                    style={{'--ktf-news-column': i + 1}}
                />
            ))}
            </div>
        </>
    );
}

function NewsPreview({ className = null, post, spoilerSize, ...props }) {
    const textCn = useTextStyles();
    const {date, title, spoilerSize: postSpoilerSize} = post.frontmatter;
    const classes = cn(styles.more, textCn("rs-link", {hardness: "average"}));

    const {content} = useMemo(() => postContentPreview(
        post.excerpt,
        spoilerSize || postSpoilerSize,
        <Link href={post.fields.slug} className={classes}>Read more</Link>
    ), [post, spoilerSize]);

    return (
        <div {...props} className={cn(className, styles.previewItem)}>
            <div className={cn(textCn('rs-text-3'), styles.date)}>{date}</div>
            <h3 className={cn(textCn('rs-h3'), styles.previewTitle)}>{title}</h3>
            <div className={cn(textCn('rs-text-2'), styles.text)}>
                {content}
            </div>
        </div>
    );
}
