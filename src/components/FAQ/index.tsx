import {FC, HTMLAttributes} from "react";
import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";
import * as style from "./faq.module.css";

export const Question: FC<HTMLAttributes<HTMLDListElement>> = ({className, children, ...props}) => (
    <dt {...props} className={cn(style.question, 'ktl-h3 ktl-offset-bottom-s', className)}>{children}</dt>
);

export const Answer: FC<HTMLAttributes<HTMLDListElement>> = ({className, children, ...props}) => {
    const textCn = useTextStyles();
    return (
        <dd {...props} className={cn(style.answer, textCn('ktl-text-1'), 'ktl-offset-bottom-l', className)}>{children}</dd>
    );
};

export const FAQ: FC<HTMLAttributes<HTMLDListElement>> = ({ className, children, ...props }) => (
    <dl {...props} className={cn(style.faq, className)}>{children}</dl>
);
