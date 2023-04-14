import {createContext, useContext} from "react";
import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import {cls, Markdown, MarkdownProps, SHORT_CODES_TYPE} from "../Markdown";

import * as styles from "./modern.module.css";

const OLAlpha = [ 'upper', 'lower' ];
export const OLContext = createContext<number | null>(null);

const offsetItems = 8;

function wrapElemAnchor(Component) {
    function AnchorID({id, children, ...props}) {
        return <Component {...props}>
            <a className={styles.tagAnchor} id={id}/>
            {children}
        </Component>;
    }
    return AnchorID;
}

const MODERN_SHORT_CODES: SHORT_CODES_TYPE = {
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
        const alphaIndex = useContext(OLContext);

        let nextIndex = alphaIndex === null ? 0 : alphaIndex + 1;
        if (nextIndex === OLAlpha.length) nextIndex = null;

        const textCn = useTextStyles();
        return (
            <ul {...cls(props, 'ktl-text-2', styles.list, textCn('rs-ol', {
                offsetItems,
                alpha: typeof alphaIndex !== 'undefined' && OLAlpha[alphaIndex]
            }))}>
                <OLContext.Provider value={nextIndex}>
                    {children}
                </OLContext.Provider>
            </ul>
        );
    },

    li: props => <li {...props}/>,

    blockquote: props => <blockquote {...cls(props, styles.quote)}/>,
};

export function ModernMarkdown({shortcodes, className, ...props}: MarkdownProps) {
    return <Markdown
        {...props}
        className={cn(className, styles.markdown)}
        shortcodes={{...MODERN_SHORT_CODES, ...(shortcodes || {})}}
    />;
}
