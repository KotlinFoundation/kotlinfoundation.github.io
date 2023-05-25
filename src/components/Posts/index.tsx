import {navigate} from "gatsby";
import cn from "classnames";

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

                    const coverImage = post.frontmatter.coverImage?.publicURL;

                    return (
                        <li key={post.id} className={styles.wrap} id={url}>
                            <div className={styles.item}>
                                <div className={styles.content}>
                                    <PostContent {...post} more={
                                        <Button className={styles.more} size="l" mode="outline" href={url} onClick={onReadMore}>Read more</Button>
                                    }/>
                                </div>
                                <div className={cn(styles.image, { [styles.noImage]: !coverImage })}>
                                    {coverImage && (
                                        <img className={styles.imageTag} alt={post.frontmatter.title} src={coverImage}/>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
