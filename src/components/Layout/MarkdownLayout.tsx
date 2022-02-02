import {FC, ReactNode} from "react";
import cn from 'classnames';
import { MDXProvider} from "@mdx-js/react";

import * as styles from "./markdownLayout.module.css";

import {Link} from "../Link";
import {graphql} from "gatsby";
import Layout from "./index";

const shortcodes = {
    p: props => <p {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-bottom-m')}/>,
    h1: props => <h1 {...props} className={cn(props.className, 'ktl-h1 ktl-offset-top-xl ktl-offset-bottom-l')}/>,
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

export interface MarkdownLayoutProps {
    children: null | ReactNode;
    pageContext?: undefined | {
        frontmatter?: {
            title?: string
        }
    }
}

export const MarkdownLayout: FC<MarkdownLayoutProps> = ({
      children,
      pageContext
  }) => {
    const pageTitle = pageContext?.frontmatter?.title;

    return (
        <Layout title={pageTitle}>
            <MDXProvider components={shortcodes}>
                <div className={'ktl-container ktl-container-fluid'}>
                    <div className={'ktl-row'}>
                        <div className={'ktl-col ktl-col-sm-12 ktl-col-md-offset-2 ktl-col-md-8 ktl-offset-bottom-xl'}>
                            {children}
                        </div>
                    </div>
                </div>
            </MDXProvider>
        </Layout>
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

export default MarkdownLayout;
