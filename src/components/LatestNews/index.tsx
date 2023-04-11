import {FC, useCallback, useMemo} from 'react';
import {graphql, navigate, useStaticQuery} from "gatsby";
import cn from "classnames";
import {useTextStyles} from "@rescui/typography";
import {PairedBlock} from "../PairedBlock";

import * as styles from "./latestNews.module.css";
import {postContentPreview} from "../PostContent";

const news = [
    {
        url: "",
        date: "January 30, 2023",
        title: "Results of the Kotlin Multiplatform contest",
        text: "Lorem ipsum dolor sit amet,duis voluptate velit esse cillum dolore empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. " +
            "Lorem ipsum dolor sit amet,duis voluptate velit esse cillum dolore empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..."
    },
    {
        url: "",
        date: "January 22, 2023",
        title: "Announcing the grants program",
        text: "Lorem ipsum dolor sit amet,duis voluptate velit esse cillum dolore empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. " +
            "Lorem ipsum dolor sit amet,duis voluptate velit esse cillum dolore empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..."
    }
];

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

            <PairedBlock left={
                <NewsPreview post={posts[0]} />
            } right={
                <NewsPreview post={posts[1]} />
            }></PairedBlock>
        </div>
    );
}

interface NewsPreviewProps {
    date: string;
    title: string;
    text: string;
    url: null | string;
}


const NewsPreview: FC<NewsPreviewProps> = ({post}) => {
    const textCn = useTextStyles();

    const { date, title } = post.frontmatter;
    const {content, isTrimmed} = useMemo(() => {
        const link = <span className={cn(styles.more, textCn("rs-link", {hardness: "average"}))}>Read more</span>;
        return  postContentPreview(post, link);
    }, [post]);
    const onReadMore = useCallback(() => {
        if (post) navigate(post.fields.slug);
    }, [post]);

    return (
        <div className={styles.previewItem} onClick={onReadMore}>
            <div className={textCn('rs-text-3')}>{date}</div>
            <h3 className={cn(textCn('rs-h3'), styles.newsTitle)}>{title}</h3>
            <div className={textCn('rs-text-2')}>{content}</div>
        </div>
    );
}
