import {FC, ReactNode} from "react";

import "@rescui/typography/lib/font-jb-sans-auto.css";
import "@jetbrains/kotlin-web-site-ui/out/components/typography/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/grid/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/cta-block/index.css";

import { SEO } from "../Seo";
import { Header } from "../Header";
import Markdown from "../Markdown/Markdown";
import {ContactUs} from "../ContactUs/ContactUs";
import { Footer } from "../Footer";

import "./typography.css";
import * as styles from "./layout.module.css";

enum LayoutSize {
    Narrow = 'narrow',
    Wide = 'wide'
}

interface MDLayoutProps {
    title?: string;
    layout?: LayoutSize;
    contactUs?: boolean;
}

export interface BaseLayoutProps {
    path: string;
    children: null | ReactNode;
}

type MarkdownLayoutProps = BaseLayoutProps & {
    pageContext?: undefined | {
        frontmatter?: MDLayoutProps
    }
};

type LayoutProps = BaseLayoutProps & MDLayoutProps;

export function Layout({ children, path, title, layout, contactUs }: LayoutProps) {
    const content = layout === LayoutSize.Wide
        ? children
        : <RegularLayout>{children}</RegularLayout>;

    return (
        <>
            <SEO title={title}/>
            <Header path={path}/>
            <div className={styles.layout}>
                {content}
                {contactUs && <ContactUs/>}
                <Footer/>
            </div>
        </>
    );
}

const RegularLayout = ({children}) => (
    <div className="ktl-layout ktl-layout--center ktl-offset-bottom-xl">
        {children}
    </div>
);

export function MarkdownLayout({children, ...props} : LayoutProps) {
    return (
        <Layout {...props}>
            <Markdown>{children}</Markdown>
        </Layout>
    );
}

export function PageMarkdownLayout({pageContext, ...props } : MarkdownLayoutProps) {
    const title = pageContext?.frontmatter?.title;
    const layout = pageContext?.frontmatter?.layout ?? LayoutSize.Narrow;
    const contact = pageContext?.frontmatter?.contactUs ?? false;

    return (
        <MarkdownLayout {...props} title={title} layout={layout} contactUs={contact}/>
    );
}

export default PageMarkdownLayout;
