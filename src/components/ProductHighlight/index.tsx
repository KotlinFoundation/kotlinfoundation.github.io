import {FC, ReactNode} from "react";
import {Link} from "gatsby";
import cn from "classnames";
import Button from "@rescui/button";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import * as styles from "./productHighlight.module.css";

export interface ProductHighlightProps {
    title: string;
    children: ReactNode[];
    link?: {
        title: string;
        href: string;
    };
}
export const ProductHighlight: FC<ProductHighlightProps> = ({title, children, link}) => {
    const textCn = useTextStyles();
    return (
        <section className={'ktl-offset-top-xxl'}>
            <div className={styles.productHighlight}>
                <h2 className="ktl-h2 ktl-offset-bottom-l">{title}</h2>
                <ul className={cn(styles.items, textCn('ktl-text-1'))}>
                    {children}
                </ul>
            </div>
            {link && <div className={styles.appendix}>
                <Link to={link.href}>
                    <Button mode="outline" size="l">{link.title}</Button>
                </Link>
            </div>}
        </section>
    );
};

export interface ProductHighlightItemProps {
    value?: null | string;
    icon?: null | string;
    children: ReactNode;
}

export const ProductHighlightItem: FC<ProductHighlightItemProps> = ({value, icon, children}) => (
    <li className={cn(styles.item, {[styles.withNumber]: !!value})}>
        {value && <div className={cn(styles.number, 'ktl-hero')}>{value}</div>}
        {icon && <img className={styles.icon} src={icon} alt="" />}
        <div className={styles.desc}>
            {children}
        </div>
    </li>
);