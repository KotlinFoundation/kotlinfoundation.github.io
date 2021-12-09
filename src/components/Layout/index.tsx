import cn from 'classnames';
import { MDXProvider} from "@mdx-js/react";
import { CtaBlock } from "@jetbrains/kotlin-web-site-ui/dist/ctaBlock";
import "@jetbrains/kotlin-web-site-ui/dist/ctaBlock.css";
import { Header } from '../Header/'

import './layout.css';

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

export const Layout = ({ withoutCta = false, children }) => (
    <MDXProvider components={shortcodes}>
        <div className="layout">
            <Header />
            <article className="ktl-container">
                {children}
            </article>

            {!withoutCta && (
                <CtaBlock
                    topTitle={<>
                        Have any questions? <br/>Contact us!
                    </>}
                    mainTitle={
                        <a href={`mailto:${contactEmail}`} className="layout__cta-link">{contactEmail}</a>
                    }
                />
            )}
        </div>
    </MDXProvider>
);
