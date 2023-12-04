import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import cn from 'classnames';
import { graphql, PageProps, useStaticQuery, withPrefix } from 'gatsby';
import Layout from '../Layout';
import { Markdown } from '../Markdown';

import * as style from './Post.module.css';

type PageTemplateProps = PageProps & {
  children: JSX.Element | JSX.Element[];
  location: Location;
  pageContext: {
    frontmatter: {
      title: string;
      date: string;
      coverImage: {
        publicURL: string;
      };
      socialImage: {
        publicURL: string;
      };
      contactUs: boolean;
    };
  };
};

export default function PageTemplate({ children, ...props }: PageTemplateProps) {
  const textCn = useTextStyles();
  const { location } = props;
  const {
    allMdx: { nodes: posts },
  } = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { isPost: { eq: true } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            coverImage {
              publicURL
            }
            socialImage {
              publicURL
            }
          }
        }
      }
    }
  `);

  const post = posts.find((post) => withPrefix(post.fields.slug) === location.pathname);

  const { title, date } = post.frontmatter;
  const coverImage = post.frontmatter.socialImage?.publicURL || post.frontmatter.coverImage?.publicURL;

  props.pageContext.frontmatter = {
    ...props.pageContext.frontmatter,
    contactUs: true,
  };

  return (
    <Layout {...props} socialImage={coverImage}>
      <p className={cn(textCn('ktl-text-3'), 'ktl-text--gray')}>{date}</p>
      <h1 className={cn('ktf-h2 ktf-h3--mm', style.title)}>{title}</h1>
      <Markdown>{children}</Markdown>
    </Layout>
  );
}
