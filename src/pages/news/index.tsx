import {graphql, useStaticQuery} from "gatsby";

import {Layout} from "../../components/Layout";
import {Posts} from "../../components/Posts";

export default function NewsList(props) {
    const { allMdx: { nodes: posts } } = useStaticQuery(graphql`
        query {
            allMdx(
                sort: {frontmatter: {date: DESC}}
                filter: {fields: {isPost: {eq: true}}}
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
                    }
                }
            }
        }
    `);

    return (
        <Layout {...props}>
            <h1>News</h1>
            <Posts posts={posts}/>
        </Layout>
    );
}
