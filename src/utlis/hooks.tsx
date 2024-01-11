import { graphql, useStaticQuery } from 'gatsby';

export function useSiteMeta() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return site;
}

export function useSiteURL() {
  return useSiteMeta().siteMetadata.siteUrl;
}
