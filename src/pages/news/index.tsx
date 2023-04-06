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
                        spoilerSize
                        coverImage {
                            childImageSharp {
                                gatsbyImageData(width: 328, quality: 100)
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout {...props} contactUs layout="wide">
            <div className="ktl-layout ktl-layout--center">
                <Posts posts={posts}/>
            </div>
        </Layout>
    );
}
