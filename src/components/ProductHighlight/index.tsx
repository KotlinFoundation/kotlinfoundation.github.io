import {FC, ReactNode} from "react";
import cn from "classnames";

import {useTextStyles} from "@rescui/typography";

import {KtlLayout} from "../KtlLayout";
import * as styles from "./productHighlight.module.css";

export interface ProductHighlightProps {
    title: string;
    children: ReactNode[];
}

export const ProductHighlight: FC<ProductHighlightProps> = ({title, children}) => {
    return (
        <KtlLayout spacing addExtraSpace>
            <div className={styles.productHighlight}>
                <h2 className={cn(styles.header, "ktf-h1--ds ktf-h2--ds-min ktf-h2--tl")}>{title}</h2>
                <ul className={cn(styles.items)}>
                    {children}
                </ul>
            </div>
        </KtlLayout>
    );
};

export interface ProductHighlightItemProps {
    value?: null | string;
    icon?: null | string;
    children: ReactNode;
}

export const ProductHighlightItem: FC<ProductHighlightItemProps> = ({value, icon, children}) => {
    const textCn = useTextStyles();

    return (
        <li className={styles.item}>
            {value && <div className={cn(styles.number, textCn('rs-hero'))}>{value}</div>}
            {icon && <img className={styles.icon} src={icon} alt=""/>}
            <div className={cn(styles.desc, textCn('rs-text-2', {hardness: 'hard'}), {[styles.withNumber]: !!value})}>
                {children}
            </div>
        </li>
    );
};