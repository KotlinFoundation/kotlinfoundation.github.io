import cn from "classnames";
import {useTextStyles} from "@rescui/typography";
import {AnchorHTMLAttributes, useMemo} from "react";
import {useSiteURL} from "../../utlis/hooks";

import * as styles from "./link.module.css";
import {ILink} from "@rescui/typography/lib/create-text-cn";

function checkExternal (link, base = null) {
    const url = new URL(link , base);
    const baseUrl = new URL(base || '');

    return url.hostname === '' || url.hostname === baseUrl.hostname;
}

type IProps =  ILink & {
    standalone?: boolean,
};

export function Link({ className, hardness = null, standalone = false, external = true, ...props } : IProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const base = useSiteURL();
    const textCn = useTextStyles();

    const { href } = props;

    const isExternal = useMemo(
        () => typeof external === "boolean" ? external : checkExternal(href, base),
        [ href, base ]
    );

    const additionalProps = !isExternal ? {} : {
        target: '_blank',
        rel: 'noopener noreferrer',
    };

    const linkClassName = textCn('rs-link', {
        external: isExternal,
        mode: standalone ?  'standalone' : 'text',
    });

    const linkHardnessClassName = textCn('rs-link', {
        hardness: hardness || 'hard',
    });

    return (
        <a {...additionalProps} {...props} className={cn(className, linkClassName, linkHardnessClassName)}/>
    );
}

export const LinkStandalone = ({className=null, ...props }) => <Link {...props} className={styles.typeStandalone} standalone={true}/>;
