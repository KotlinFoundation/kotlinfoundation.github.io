import {graphql, useStaticQuery} from "gatsby";
import * as React from "react";
import Helmet from 'react-helmet';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    meta?: {name: string; content: string}[];
}

import imageUrl from '../../images/preview.png';
import logoUrl from '../../images/kotlin-logo.png';

export function SEO({title, description, image, meta = []} : SEOProps) {
    const {site} = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `);

    const metaDescription = description || site.siteMetadata.description;
    const url = site.siteMetadata.siteUrl;
    const absoluteImageUrl = site.siteMetadata.siteUrl + (image || imageUrl);

    const schemaOrgJSONLD = [
        {
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            url: site.siteMetadata.siteUrl,
            name: site.siteMetadata.title
        },
        {
            '@context': 'https://schema.org/',
            '@type': 'WebPage',
            '@id': `${url}#webpage`,
            url,
            name: title,
            description: metaDescription,
            image: absoluteImageUrl
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'url': site.siteMetadata.siteUrl,
            'logo': site.siteMetadata.siteUrl + logoUrl
        }
    ];

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                // General tags
                { name: `description`, content: metaDescription },
                { name: `image`, content: absoluteImageUrl },
                // Open Graph tags
                { property: `og:title`, content: title },
                { property: `og:image`, content: absoluteImageUrl },
                { property: `og:description`, content: metaDescription },
                { property: `og:site_name`, content: site.siteMetadata.title },
                { property: `og:type`, content: `website` },
                { property: `og:url`, content: url },
                // Twitter Card tags
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: site.siteMetadata.author },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: metaDescription },
                { name: 'twitter:creator', content: site.siteMetadata.author },
                { name: 'twitter:image', content: absoluteImageUrl }
            ].concat(meta)}
        >
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    );
}
