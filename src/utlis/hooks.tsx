import {graphql, useStaticQuery} from "gatsby";

export function useSiteURL () {
    const { site } = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
    `);
    return site.siteMetadata.siteUrl;
}
