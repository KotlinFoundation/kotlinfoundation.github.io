import {navigate} from "gatsby";
import cn from "classnames";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Button from "@rescui/button";

import {PostContent} from "../PostContent";

import * as styles from './posts.module.css';

export function Posts({ posts }) {
    return (
        <>
            <h1 className={cn("ktf-h1", styles.mainTitle)}>News</h1>
            <ul className={styles.list}>
                {posts.map(post => {
                    const url = post.fields.slug;

                    const onReadMore = e => {
                        e.preventDefault();
                        navigate(url)
                    };

                    const coverImage = getImage(post.frontmatter.coverImage?.childImageSharp?.gatsbyImageData)

                    return (
                        <li key={post.id} className={styles.wrap} id={url}>
                            <div className={styles.item}>
                                <div className={styles.content}>
                                    <PostContent {...post} more={
                                        <Button className={styles.more} size="l" mode="outline" href={url} onClick={onReadMore}>Read more</Button>
                                    }/>
                                </div>
                                <div className={styles.image}>
                                    <GatsbyImage alt={post.frontmatter.title} image={coverImage}/>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
