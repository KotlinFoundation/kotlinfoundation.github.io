import cn from "classnames";
import * as styles from "./markdown.module.css";

import {Link} from "../Link";
import { MDXProvider} from "@mdx-js/react";
import {FAQ, Answer, Question} from "../FAQ";
import {Structure} from "../Structure";
import {Department} from "../Structure/Department";
import {VideoGallery} from "../VideoGallery";
import {IntroBanner} from "../IntroBanner";
import {ProductHighlight, ProductHighlightItem} from "../ProductHighlight";
import {NotFound} from "../NotFound";

const shortcodes = {
    p: props => <p {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-bottom-m')}/>,
    h1: props => <h1 {...props} className={cn(props.className, 'ktl-h1 ktl-offset-top-xl ktl-offset-bottom-l')}/>,
    h2: props => <h2 {...props} className={cn(props.className, 'ktl-h2 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h3: props => <h3 {...props} className={cn(props.className, 'ktl-h3 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h4: props => <h4 {...props} className={cn(props.className, 'ktl-h4 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h5: props => <h5 {...props} className={cn(props.className, 'ktl-h5 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    h6: props => <h6 {...props} className={cn(props.className, 'ktl-h6 ktl-offset-top-l ktl-offset-bottom-m')}/>,
    ul: props => <ul {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-top-s')}/>,
    ol: props => <ol {...props} className={cn(props.className, 'ktl-text-1 ktl-offset-top-s')}/>,
    li: props => <li {...props} className={cn(props.className, 'ktl-offset-bottom-s')}/>,
    pre: props => <div><pre {...props} className={cn(props.className, 'ktl-text-2', styles.codeInner)}/></div>,
    a: props => <Link {...props}/>,
    img: props => <img {...props}/>,
    FAQ,
    Question,
    Answer,
    Structure,
    Department,
    VideoGallery,
    IntroBanner,
    ProductHighlight,
    ProductHighlightItem,
    NotFound
    // blockquote: props => <blockquote {...props} className={cn(props.className, 'ktl-')}/>,
    // strong: props => <strong {...props} className={cn(props.className, 'ktl-')}/>,
    // hr: props => <hr {...props} className={cn(props.className, 'ktl-')}/>,
    // table: props => <table {...props} className={cn(props.className, 'ktl-')}/>,
    // tr: props => <tr {...props} className={cn(props.className, 'ktl-')}/>,
    // td: props => <td {...props} className={cn(props.className, 'ktl-')}/>,
    // pre: props => <pre {...props} className={cn(props.className, 'ktl-')}/>,
    //  delete: props => <delete {...props} className={cn(props.className, 'ktl-')}/>,
    // thematicBreak: props => <thematicBreak {...props} className={cn(props.className, 'ktl-')}/>,
    //  inlineCode: props => <inlineCode {...props} className={cn(props.className, 'ktl-')}/>,
};

const Markdown = ({children}) => (
    <MDXProvider components={shortcodes}>
        {children}
    </MDXProvider>
);

export default Markdown;