import {ReactNode} from "react";
import cn from "classnames";

import "@rescui/typography/lib/font-jb-sans-auto.css";
import "@jetbrains/kotlin-web-site-ui/out/components/typography/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/grid/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/cta-block/index.css";

import "./typography.css";
import "./heading.css";

import { SEO } from "../Seo";
import { Header } from "../Header";
import { Markdown, ModernMarkdown } from "../Markdown";
import { ContactUs } from "../ContactUs/ContactUs";
import { Footer } from "../Footer";

import * as styles from "./layout.module.css";

export enum LayoutSize {
    Narrow = 'narrow',
    Wide = 'wide'
}

interface MDLayoutProps {
    title?: string;
    layout?: LayoutSize;
    contactUs?: boolean;
    appearance?: LayoutMDAppearance
}

export enum LayoutMDAppearance {
    Modern = 'modern',
    Classic = 'classic'
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
    <div className={cn('ktl-layout ktl-layout--center ktl-layout--spacing')}>
        {children}
    </div>
);

export function MarkdownLayout({appearance, children, ...props} : LayoutProps) {
    const Tag = LayoutMDAppearance.Modern === appearance ? ModernMarkdown : Markdown;
    return (
        <Layout {...props}>
            <Tag>{children}</Tag>
        </Layout>
    );
}

export function PageMarkdownLayout({pageContext, ...props } : MarkdownLayoutProps) {
    const title = pageContext?.frontmatter?.title;
    const layout = pageContext?.frontmatter?.layout ?? LayoutSize.Narrow;
    const contact = pageContext?.frontmatter?.contactUs ?? false;
    const appearance = pageContext?.frontmatter?.appearance ?? LayoutMDAppearance.Classic;

    return (
        <MarkdownLayout {...props} title={title} layout={layout} appearance={appearance} contactUs={contact}/>
    );
}

export default PageMarkdownLayout;
