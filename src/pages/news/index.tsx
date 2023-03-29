import {graphql, useStaticQuery} from "gatsby";

import {Layout} from "../../components/Layout";
import {Link} from "../../components/Link";

export default function NewsList(props) {
    const { allMdx: { nodes: posts } } = useStaticQuery(graphql`
        query {
            allMdx(filter: {frontmatter: {isPost: {eq: true}}}) {
                nodes {
                    id,
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        isPost
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    `);

    return (
        <Layout {...props}>
            <ul>
                {posts.map(post => (
                    <li>
                        <p>{post.frontmatter.date}</p>
                        <p>{post.frontmatter.title}</p>
                        <Link href={post.fields.slug}>{post.excerpt}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
