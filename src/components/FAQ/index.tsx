import cn from "classnames";
import * as style from "./faq.module.css";
import {HTMLAttributes} from "react";

function Question({className, ...props}: HTMLAttributes<HTMLDListElement>) {
    return <dt {...props} className={cn(style.question, 'ktl-h3 ktl-offset-bottom-s', className)}/>;
}

function Answer({className, ...props}: HTMLAttributes<HTMLDListElement>) {
    return <dd {...props} className={cn(style.answer, 'ktl-text-1 ktl-offset-bottom-l', className)}/>;
}

export function FAQ({ className, ...props }: HTMLAttributes<HTMLDListElement>) {
    return <dl {...props} className={cn(style.faq, className)}/>;
}

FAQ.Answer = Answer;
FAQ.Question = Question;
