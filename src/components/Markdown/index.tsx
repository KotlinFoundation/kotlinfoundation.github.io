import {createContext, ReactNode, useContext} from "react";
import cn from "classnames";
import {MDXProvider} from "@mdx-js/react";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import {useSiteMeta} from "../../utlis/hooks";
import {Link} from "../Link";

import * as CUSTOM_MARKDOWN_TAGS from "./CustomTags";

import * as styles from "./modern.module.css";

const OLAlpha = [ 'upper', 'lower' ];
export const OLContext = createContext<number | null>(null);

const offsetItems = 8;

export function cls(props, ...classes: cn.ArgumentArray) {
    return { ...props, className: cn(props.className, ...classes) };
}

function wrapElemAnchor(Component) {
    function AnchorID({id, children, ...props}) {
        return <Component {...props}>
            <a className={styles.tagAnchor} id={id}/>
            {children}
        </Component>;
    }
    return AnchorID;
}

const MODERN_SHORT_CODES = {
    h1:  wrapElemAnchor(function H1(props) {
        return <h1 {...cls(props, 'ktf-h1', styles.h1)}/>;
    }),
    h2:  wrapElemAnchor(function H2(props) {
        return <h2 {...cls(props, 'ktf-h2 ktf-h3--mm', styles.h2)}/>;
    }),
    h3:  wrapElemAnchor(function H3(props) {
        return <h3 {...cls(props, 'ktf-h3 ktf-h4--mm', styles.h3)}/>;
    }),
    h4:  wrapElemAnchor(function H4(props) {
        return <h4 {...cls(props, 'ktl-h4', styles.h4)}/>;
    }),
    h5:  wrapElemAnchor(function H5(props) {
        return <h5 {...cls(props, 'ktl-h5', styles.h5)}/>;
    }),
    h6:  wrapElemAnchor(function H6(props) {
        return <h6 {...cls(props, 'ktl-h6', styles.h6)}/>;
    }),

    p: function P(props) {
        const textCn = useTextStyles();
        return <p {...cls(props, textCn('ktl-text-2'), styles.para)}/>;
    },

    ul: function UL(props) {
        const textCn = useTextStyles();
        return <ul {...cls(props, textCn('rs-ul', { offsetItems }), 'ktl-text-2', styles.list)}/>;
    },

    ol: function OL({ children, ...props }) {
        const textCn = useTextStyles();
        const alphaIndex = useContext(OLContext);

        let nextIndex = alphaIndex === null ? 0 : alphaIndex + 1;
        if (nextIndex === OLAlpha.length) nextIndex = null;

        return (
            <ul {...cls(props, 'ktl-text-2', styles.list, textCn('rs-ol', {
                offsetItems,
                alpha: alphaIndex === undefined && OLAlpha[alphaIndex]
            }))}>
                <OLContext.Provider value={nextIndex}>
                    {children}
                </OLContext.Provider>
            </ul>
        );
    },

    li: props => <li {...props}/>,

    a: function A(props) {
        const {pathPrefix} = useSiteMeta();

        let url = props.href;

        if (url && url.startsWith(pathPrefix))
            url = url.substring(pathPrefix.length);

        return <Link {...props} href={url}/>;
    },

    blockquote: props => <blockquote {...cls(props, styles.quote)}/>,
    pre: props => <div><pre {...cls(props, 'ktl-text-2', styles.codeBlock)}/></div>,

    // strong: props => <strong {...cls(props, 'ktl-')}/>,
    // hr: props => <hr {...cls(props, 'ktl-')}/>,
    // table: props => <table {...cls(props, 'ktl-')}/>,
    // tr: props => <tr {...cls(props, 'ktl-')}/>,
    // td: props => <td {...cls(props, 'ktl-')}/>,
    // pre: props => <pre {...cls(props, 'ktl-')}/>,
    //  delete: props => <delete {...cls(props, 'ktl-')}/>,
    // thematicBreak: props => <thematicBreak {...cls(props, 'ktl-')}/>,
    //  inlineCode: props => <inlineCode {...cls(props, 'ktl-')}/>,

    ...CUSTOM_MARKDOWN_TAGS,
};

export type SHORT_CODES_TYPE = Partial<typeof MODERN_SHORT_CODES>

export type MarkdownProps = {
    className?: string,
    shortcodes?: SHORT_CODES_TYPE,
    children: ReactNode,
}

export function Markdown({shortcodes, className, children}: MarkdownProps) {
    return (
        <MDXProvider components={{...MODERN_SHORT_CODES, ...(shortcodes || {})}}>
            <div className={cn(className, styles.markdown)}>{children}</div>
        </MDXProvider>
    );
}
