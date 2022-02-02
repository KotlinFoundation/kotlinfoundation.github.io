import { ReactNode} from "react";
import cn from 'classnames';
import { MDXProvider} from "@mdx-js/react";

import { CtaBlock } from "@jetbrains/kotlin-web-site-ui/dist/ctaBlock";

import "@rescui/typography/lib/font-inter.css";
import "@jetbrains/kotlin-web-site-ui/dist/typography.css";
import "@jetbrains/kotlin-web-site-ui/dist/grid.css";
import "@jetbrains/kotlin-web-site-ui/dist/ctaBlock.css";

import * as styles from "./layout.module.css";

import { SEO } from "../Seo";
import { Header } from "../Header";
import { Footer } from "../Footer";
import {Link} from "../Link";
import {graphql} from "gatsby";

const shortcodes = {
    p: props => <p {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-bottom-m')}/>,
    h1: props => <h1 {...props} className={cn(props.className, 'ktl-h1 ktl-offset-top-l ktl-offset-bottom-l')}/>,
    h2: props => <h2 {...props} className={cn(props.className, 'ktl-h2 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h3: props => <h3 {...props} className={cn(props.className, 'ktl-h3 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h4: props => <h4 {...props} className={cn(props.className, 'ktl-h4 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h5: props => <h5 {...props} className={cn(props.className, 'ktl-h5 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h6: props => <h6 {...props} className={cn(props.className, 'ktl-h6 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    ul: props => <ul {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-top-s')}/>,
    ol: props => <ol {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-top-s')}/>,
    li: props => <li {...props} className={cn(props.className, 'ktl-offset-bottom-s')}/>,
    pre: props => <div><pre {...props} className={cn(props.className, 'ktl-text-2', styles.codeInner)}/></div>,
    a: props => <Link {...props}/>,
    img: props => <img {...props}/>,

    // blockquote: props => <blockquote {...props} className={cn(props.className, 'ktl-')}/>,
    // strong: props => <strong {...props} className={cn(props.className, 'ktl-')}/>,
    // hr: props => <hr {...props} className={cn(props.className, 'ktl-')}/>,
    // table: props => <table {...props} className={cn(props.className, 'ktl-')}/>,
    // tr: props => <tr {...props} className={cn(props.className, 'ktl-')}/>,
    // td: props => <td {...props} className={cn(props.className, 'ktl-')}/>,
    // pre: props => <pre {...props} className={cn(props.className, 'ktl-')}/>,
    //  delete: props => <delete {...props} className={cn(props.className, 'ktl-')}/>,
    // thematicBreak: props => <thematicBreak {...props} className={cn(props.className, 'ktl-')}/>,
    //  inlineCode: props => <inlineCode {...props} className={cn(props.className, 'ktl-')}/>,
};

const contactEmail = 'hello@kotlinfoundation.org';

export interface LayoutProps {
    title: string;
    intro?: null | ReactNode;
    children: null | ReactNode;
    outro?: null | ReactNode;
    whiteHeader?: boolean;
    withoutCta?: boolean;
    pageContext?: undefined | {
        frontmatter?: {
            title?: string
        }
    }
}

export const Layout: React.FC<LayoutProps> = ({
    title,
    intro = null,
    children,
    outro = null,
    whiteHeader = false,
    withoutCta = false,
    pageContext
}) => {
    const pageTitle = pageContext?.frontmatter?.title ?? title;

    return (
        <MDXProvider components={shortcodes}>
            <SEO title={pageTitle} />
            <Header whiteBg={whiteHeader} />

            {intro}

            <div className={styles.layout}>
                <article className="ktl-container">
                    {children}
                </article>

                {outro}

                {!withoutCta && (
                    <CtaBlock
                        topTitle={<>
                            Have any questions? <br/>Contact us!
                        </>}
                        mainTitle={
                            <a href={`mailto:${contactEmail}`} className={styles.ctaLink}>{contactEmail}</a>
                        }
                    />
                )}
                <Footer/>
            </div>
        </MDXProvider>
    );
};

export const pageQuery = graphql`
query {
  allMdx {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}
`

export default Layout;
