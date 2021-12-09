import cn from "classnames";
import {useTextStyles} from "@rescui/typography";
import {HTMLAttributes} from "react";
import {useSiteURL} from "../../utlis/hooks";

import * as styles from "./link.module.css";

function checkExternal (link, base = null) {
    const url = new URL(link , base);
    const baseUrl = new URL(base || '');

    return url.hostname === baseUrl.hostname;
}

type IProps = {
    standalone?: boolean,
    external?: boolean
}

export function Link({ standalone = false, external = true, ...props } : IProps & HTMLAttributes<HTMLAnchorElement>) {
    const base = useSiteURL();
    const textCn = useTextStyles();
    const isExternal = typeof external === "boolean" ? external : checkExternal(props.href, base);

    const additionalProps = !isExternal ? {} : {
        target: '_blank',
        rel: 'noopener noreferrer',
    };

    const linkClassName = textCn('rs-link', {
        external: isExternal,
        mode: standalone ?  'standalone' : 'text',
    });

    const linkHardnessClassName = textCn('rs-link', {
        hardness: 'average',
    });

    return (
        <a {...additionalProps} {...props} className={cn(props.className, linkClassName, linkHardnessClassName)}/>
    );
}

export const LinkStandalone = ({className=null, ...props }) => <Link {...props} className={styles.typeStandalone} standalone={true}/>;
