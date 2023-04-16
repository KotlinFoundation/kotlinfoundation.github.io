import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";
import { Person } from "../Person";
import * as style from "./structure.module.css";

export function Department({hero = false, name, members, children}) {
    const textCn = useTextStyles();
    const persons = members
        ? Array.isArray(members) ? members : [ members ]
        : [];

    return (
        <div className={cn(style.row, {
            [style.hero]: Boolean(hero),
        })}>
            <h2 className={cn('ktl-h2', style.title)}>{name}</h2>

            <ul className={style.members}>{persons.map((person, i) => (
                <li key={i} className={style.member}>
                    <Person { ...(hero ? { size: 'xl' } : {})} {...person}/>
                </li>
            ))}</ul>

            <div className={cn(textCn('ktl-text-1'), style.description)}>
                {children}
            </div>
        </div>
    );
}

