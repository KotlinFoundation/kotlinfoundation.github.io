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
    Regular = 'regular',
    Wide = 'wide'
}

export interface LayoutProps {
    children: null | ReactNode;
    pageContext?: undefined | {
        frontmatter?: {
            title?: string;
            layout?: LayoutSize;
            whiteHeader?: boolean;
            contactUs?: boolean;
        }
    }
}

export const Layout: FC<LayoutProps> = ({
    children,
    pageContext
}) => {
    const pageTitle = pageContext?.frontmatter?.title;
    const layout = pageContext?.frontmatter?.layout ?? LayoutSize.Narrow;
    const whiteHeader = pageContext?.frontmatter?.whiteHeader ?? false;
    const contactBlock = pageContext?.frontmatter?.contactUs ?? false;

    let LayoutComponent = NarrowLayout;

    if (layout === LayoutSize.Regular) {
        LayoutComponent = RegularLayout;
    } else if (layout === LayoutSize.Wide) {
        LayoutComponent = WideLayout;
    }

    return (
        <>
            <SEO title={pageTitle} />
            <Header whiteBg={whiteHeader} />

            <div className={styles.layout}>
                <LayoutComponent>{children}</LayoutComponent>
                {contactBlock && <ContactUs />}
                <Footer/>
            </div>
        </>
    );
};

const NarrowLayout = ({children}) => (
    <div className={'ktl-container ktl-container-fluid'}>
        <div className={'ktl-row'}>
            <div className={'ktl-col ktl-col-sm-12 ktl-col-md-offset-2 ktl-col-md-8 ktl-offset-bottom-xl'}>
                <Markdown>
                    {children}
                </Markdown>
            </div>
        </div>
    </div>
);

const RegularLayout = ({children}) => (
    <div className={'ktl-container ktl-offset-bottom-xxl'}>
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
          whiteHeader
          contactUs
        }
      }
    }
  }
}
`

export default Layout;
