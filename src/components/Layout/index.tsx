import {FC, ReactNode} from "react";

import "@rescui/typography/lib/font-jb-sans-auto.css";
import "@jetbrains/kotlin-web-site-ui/out/components/typography/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/grid/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/cta-block/index.css";

import "./typography.css";
import * as styles from "./layout.module.css";

import { SEO } from "../Seo";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Markdown from "../Markdown/Markdown";
import {graphql} from "gatsby";
import {ContactUs} from "../ContactUs/ContactUs";

enum LayoutSize {
    Narrow = 'narrow',
    Wide = 'wide'
}

export interface LayoutProps {
    path: string;
    children: null | ReactNode;
    pageContext?: undefined | {
        frontmatter?: {
            title?: string;
            layout?: LayoutSize;
            contactUs?: boolean;
        }
    }
}

export const Layout: FC<LayoutProps> = ({
    children,
    pageContext,
    path,
}) => {
    const pageTitle = pageContext?.frontmatter?.title;
    const layout = pageContext?.frontmatter?.layout ?? LayoutSize.Narrow;
    const contactBlock = pageContext?.frontmatter?.contactUs ?? false;

    let LayoutComponent = RegularLayout;

    if (layout === LayoutSize.Wide) {
        LayoutComponent = WideLayout;
    }

    return (
        <>
            <SEO title={pageTitle} />
            <Header path={path}/>

            <div className={styles.layout}>
                <LayoutComponent>{children}</LayoutComponent>
                {contactBlock && <ContactUs />}
                <Footer/>
            </div>
        </>
    );
};

const RegularLayout = ({children}) => (
    <div className={'ktl-layout ktl-layout--center ktl-offset-bottom-xl'}>
        <Markdown>
            {children}
        </Markdown>
    </div>
);

const WideLayout = ({children}) => (
    <Markdown>{children}</Markdown>
);

export const pageQuery = graphql`
query {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          layout
          contactUs
        }
      }
    }
  }
}
`

export default Layout;
