import {cls, Markdown, MarkdownProps, SHORT_CODES_TYPE} from "../Markdown";

import * as styles from "./modern.module.css";

const MODERN_SHORT_CODES: SHORT_CODES_TYPE = {
    h1: props => <h1 {...cls(props, 'ktf-h2 ktf-h3--mm', styles.h1)}/>,
    h2: props => <h2 {...cls(props, 'ktf-h3 ktf-h4--mm', styles.h2)}/>,
    h3: props => <h3 {...cls(props, 'ktf-h4', styles.h3)}/>,
    p: props => <p {...cls(props, 'ktl-text-2', styles.para)}/>,
};

export function ModernMarkdown({shortcodes, ...props}: MarkdownProps) {
    return <Markdown {...props} shortcodes={{...MODERN_SHORT_CODES, ...(shortcodes || {})}}/>
}
