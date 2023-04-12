import {useMemo} from 'react';
import {graphql, useStaticQuery} from "gatsby";
import cn from "classnames";
import {useTextStyles} from "@rescui/typography";

import {Link} from "../Link";
import {PairedBlock} from "../PairedBlock";
import {postContentPreview} from "../PostContent";

import * as styles from "./latestNews.module.css";

export function LatestNews() {
    const textCn = useTextStyles();
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

    return (
        <div>
            <h2 className={cn(styles.title, textCn('rs-h2'))}>Latest news</h2>

            <PairedBlock
                left={<NewsPreview post={posts[0]} />}
                right={<NewsPreview post={posts[1]} />}
            />
        </div>
    );
}

function NewsPreview({ post }) {
    const textCn = useTextStyles();
    const {date, title} = post.frontmatter;

    const {content} = useMemo(() => {
        const classes = cn(styles.more, textCn("rs-link", {hardness: "average"}));

        return postContentPreview(post, (
            <Link href={post.fields.slug} className={classes}>Read more</Link>
        ));
    }, [post]);

    return (
        <div className={styles.previewItem}>
            <div className={textCn('rs-text-3')}>{date}</div>
            <h3 className={cn(textCn('rs-h3'), styles.newsTitle)}>{title}</h3>
            <div className={cn(textCn('rs-text-2'), styles.text)}>{content}</div>
        </div>
    );
}
