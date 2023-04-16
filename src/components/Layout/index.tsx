import {ReactNode} from "react";
import cn from "classnames";
import { LocationContext } from "./locationContext";

import "@rescui/typography/lib/font-jb-sans-auto.css";
import "@jetbrains/kotlin-web-site-ui/out/components/typography/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/grid/index.css";
import "@jetbrains/kotlin-web-site-ui/out/components/cta-block/index.css";

import "./typography.css";
import "./heading.css";

import { SEO } from "../Seo";
import { Header as Header } from "../Header";
import { Markdown } from "../Markdown";
import { ContactUs } from "../ContactUs/ContactUs";
import { Footer } from "../Footer";

import * as styles from "./layout.module.css";

export enum LayoutSize {
    Regular = 'regular',
    Narrow = 'narrow',
    Wide = 'wide',
}

interface MDLayoutProps {
    title?: string;
    layout?: LayoutSize;
    contactUs?: boolean;
    greyLayout?: boolean;
}

export interface BaseLayoutProps {
    location: Location;
    children: null | ReactNode;
    greyLayout?: boolean;
    socialImage?: string;
}

type MarkdownLayoutProps = BaseLayoutProps & {
    pageContext?: undefined | {
        frontmatter?: MDLayoutProps
    }
};

type LayoutProps = BaseLayoutProps & MDLayoutProps;

export function Layout({ children, location, title, layout, socialImage = null, contactUs, greyLayout }: LayoutProps) {
    const content = layout === LayoutSize.Wide
        ? children
        : (
            <RegularLayout className={LayoutSize.Narrow === layout && styles.narrow}>
                {children}
            </RegularLayout>
        );

    return (
        <LocationContext.Provider value={location}>
            <SEO title={title} image={socialImage}/>
            <Header/>
            <div className={cn(styles.layout, {[styles.greyLayout]: Boolean(greyLayout)})}>
                {content}
                {contactUs && <ContactUs/>}
                <Footer/>
            </div>
        </LocationContext.Provider>
    );
}

function RegularLayout({className, children}) {
    return <div className={cn(className, 'ktl-layout ktl-layout--center ktl-layout--spacing')}>
        {children}
    </div>;
}

export function MarkdownLayout({ children, ...props } : LayoutProps) {
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
    const greyLayout = pageContext?.frontmatter?.greyLayout ?? false;

    return (
        <MarkdownLayout {...props} title={title} layout={layout} contactUs={contact} greyLayout={greyLayout} />
    );
}

export default PageMarkdownLayout;
