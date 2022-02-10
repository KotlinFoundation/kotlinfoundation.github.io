import {AnchorHTMLAttributes, useMemo} from "react";
import cn from "classnames";
import { Link as GatsbyLink } from 'gatsby';
import {useTextStyles} from "@rescui/typography";
import {useSiteURL} from "../../utlis/hooks";

import * as styles from "./link.module.css";
import {ILink} from "@rescui/typography/lib/create-text-cn";

function checkExternal (link, base = null) {
    const url = new URL(link , base);
    const baseUrl = new URL(base || '');

    return !(url.hostname === '' || url.hostname === baseUrl.hostname);
}

type IProps =  ILink & {
    standalone?: boolean,
};

export function Link({ className, hardness = null, standalone = false, external = null, ...props } : IProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const base = useSiteURL();
    const textCn = useTextStyles();

    const { href } = props;

    const isExternal = useMemo(
        () => checkExternal(href, base),
        [ href, base ]
    );

    const externalDecorator = useMemo(
        () => typeof external === "boolean" ? external : isExternal,
        [ external, isExternal ]
    );

    const additionalProps = useMemo(
        () => isExternal
            ? {
                target: '_blank',
                rel: 'noopener noreferrer',
            }
            : {
                to: href
            },
        [ isExternal, href ],
    );

    const linkClassName = textCn('rs-link', {
        external: externalDecorator,
        mode: standalone ?  'standalone' : 'text',
    });

    const linkHardnessClassName = textCn('rs-link', {
        hardness: hardness || 'hard',
    });

    const Tag = isExternal ?
        'a' :
        GatsbyLink;

    return (
        <Tag {...additionalProps} {...props} className={cn(className, linkClassName, linkHardnessClassName)}/>
    );
}

export const LinkStandalone = ({className=null, ...props }) => <Link {...props} className={styles.typeStandalone} standalone={true}/>;
