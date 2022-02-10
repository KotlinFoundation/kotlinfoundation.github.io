import {FC, HTMLAttributes} from "react";
import cn from "classnames";
import * as style from "./faq.module.css";

export const Question: FC<HTMLAttributes<HTMLDListElement>> = ({className, children, ...props}) => (
    <dt {...props} className={cn(style.question, 'ktl-h3 ktl-offset-bottom-s', className)}>{children}</dt>
);

export const Answer: FC<HTMLAttributes<HTMLDListElement>> = ({className, children, ...props}) => (
    <dd {...props} className={cn(style.answer, 'ktl-text-1 ktl-offset-bottom-l', className)}>{children}</dd>
);

export const FAQ: FC<HTMLAttributes<HTMLDListElement>> = ({ className, children, ...props }) => (
    <dl {...props} className={cn(style.faq, className)}>{children}</dl>
);
