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

const shortcodes = {
    p: props => <p {...props} className={cn(props.className, 'ktl-text-1')}/>,
    h1: props => <h1 {...props} className={cn(props.className, 'ktl-hero')}/>,
    h2: props => <h2 {...props} className={cn(props.className, 'ktl-h2')}/>,
    h3: props => <h3 {...props} className={cn(props.className, 'ktl-h3')}/>,
    h4: props => <h4 {...props} className={cn(props.className, 'ktl-h4')}/>,
    h5: props => <h5 {...props} className={cn(props.className, 'ktl-h5')}/>,
    h6: props => <h6 {...props} className={cn(props.className, 'ktl-h6')}/>,
    a: props => <a {...props}/>,
};

const contactEmail = 'hello@kotlinfoundation.org';

interface LayoutProps {
    title: string;
    intro?: null | ReactNode;
    outro?: null | ReactNode;
    whiteHeader?: boolean;
    withoutCta?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
    title,
    intro = null,
    children,
    outro = null,
    whiteHeader = false,
    withoutCta = false,
}) => (
    <MDXProvider components={shortcodes}>
        <SEO title={title} />
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

export default Layout;
