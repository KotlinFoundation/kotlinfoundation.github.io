import cn from "classnames";
import Person from "../Person";
import * as style from "./structure.module.css";

export const Department = ({ hero = false, name, members, children }) => {
    const persons = members
        ? Array.isArray(members) ? members : [ members ]
        : [];

    return (
        <div className={cn(style.row, {
            [style.hero]: Boolean(hero),
        })}>
            <h2 className={cn('ktl-h2', style.title)}>{name}</h2>

            <ul className={style.members}>{persons.map((person, i) => (
                <li><Person key={i} size={hero ? 'xl' : null} {...person}/></li>
            ))}</ul>

            <div className={cn('ktl-text-1', style.description)}>
                {children}
            </div>
        </div>
    );
}

export default Department;
