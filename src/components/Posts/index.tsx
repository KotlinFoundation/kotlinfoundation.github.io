import {PostContent} from "../PostContent";

import * as styles from './news.module.css';

export function Posts({ posts }) {
    return (
        <ul className={styles.list}>
            {posts.map(post => (
                <li className={styles.item}>
                    <PostContent key={post.fields.slug} {...post}/>
                </li>
            ))}
        </ul>
    );
}
