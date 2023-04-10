import {ReactNode} from "react";
import cn from "classnames";
import {MDXProvider} from "@mdx-js/react";

import {Link} from "../Link";
import {KtlLayout} from "../KtlLayout";
import {Answer, FAQ, Question} from "../FAQ";
import {Structure} from "../Structure";
import {Department} from "../Structure/Department";
import {VideoGallery} from "../VideoGallery";
import {IntroBanner} from "../IntroBanner";
import {ProductHighlight, ProductHighlightItem} from "../ProductHighlight";
import {NotFound} from "../NotFound";

import * as styles from "./markdown.module.css";

export function cls({ className, ...props }, ...classes: cn.ArgumentArray) {
    return {
        ...props,
        className: cn(className, ...classes)
    };
}

export const DEFAULT_SHORT_CODES = {
    h1: props => <h1 {...cls(props, 'ktl-h1 ktl-offset-top-xl ktl-offset-bottom-l')}/>,
    h2: props => <h2 {...cls(props, 'ktl-h2 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h3: props => <h3 {...cls(props, 'ktl-h3 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h4: props => <h4 {...cls(props, 'ktl-h4 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h5: props => <h5 {...cls(props, 'ktl-h5 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h6: props => <h6 {...cls(props, 'ktl-h6 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    p: props => <p {...cls(props, 'ktl-text-1 ktl-offset-bottom-m')}/>,
    ul: props => <ul {...cls(props, 'ktl-text-1 ktl-offset-top-s')}/>,
    ol: props => <ol {...cls(props, 'ktl-text-1 ktl-offset-top-s')}/>,
    li: props => <li {...cls(props, 'ktl-offset-bottom-s')}/>,
    pre: props => <div><pre {...cls(props, 'ktl-text-2', styles.codeInner)}/></div>,
    a: props => <Link {...props}/>,
    blockquote: props => <blockquote {...props}/>,

    Layout: KtlLayout,
    FAQ,
    Question,
    Answer,
    Structure,
    Department,
    VideoGallery,
    IntroBanner,
    ProductHighlight,
    ProductHighlightItem,
    NotFound,

    // strong: props => <strong {...cls(props, 'ktl-')}/>,
    // hr: props => <hr {...cls(props, 'ktl-')}/>,
    // table: props => <table {...cls(props, 'ktl-')}/>,
    // tr: props => <tr {...cls(props, 'ktl-')}/>,
    // td: props => <td {...cls(props, 'ktl-')}/>,
    // pre: props => <pre {...cls(props, 'ktl-')}/>,
    //  delete: props => <delete {...cls(props, 'ktl-')}/>,
    // thematicBreak: props => <thematicBreak {...cls(props, 'ktl-')}/>,
    //  inlineCode: props => <inlineCode {...cls(props, 'ktl-')}/>,
};

export type SHORT_CODES_TYPE = Partial<typeof DEFAULT_SHORT_CODES>

export type MarkdownProps = {
    className?: string,
    shortcodes?: SHORT_CODES_TYPE,
    children: ReactNode,
}

export const Markdown = ({className, shortcodes, children} : MarkdownProps) => (
    <MDXProvider components={{...DEFAULT_SHORT_CODES, ...(shortcodes || {})}}>
        <div className={cn(className, styles.markdown)}>{children}</div>
    </MDXProvider>
);
