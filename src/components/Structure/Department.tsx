import {useCallback, useRef, useState} from "react";
import cn from "classnames";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import { PurePerson as Person } from "../Person";

import * as style from "./structure.module.css";
import {graphql, useStaticQuery} from "gatsby";

function randomMascotUrl(hero, mascots) {
    return hero
        ? `url("${mascots[Math.floor(Math.random() * mascots.length)].publicURL}")`
        : null;
}

const MASCOT_CSS_PROP = '--person-mascot-url';

export function Department({hero = false, name, members, children}) {
    const textCn = useTextStyles();
    const ref = useRef(null);

    const { allFile: { nodes: mascots } } = useStaticQuery(graphql`query {
        allFile(filter: {relativePath: {glob: "mascots/*.svg"}}) {
            nodes {
                publicURL
            }
        }
    }`);

    const [mascot, setMascot] = useState(randomMascotUrl(hero, mascots));

    const onHover = useCallback(() => {
        if (ref && ref.current) {
            let url;
            const currentUrl = ref.current.style.getPropertyValue(MASCOT_CSS_PROP);

            do {
                url = randomMascotUrl(hero, mascots);
            } while (url === currentUrl);

            setMascot(url);
        }
    }, [ ref, setMascot ]);

    const persons = members
        ? Array.isArray(members) ? members : [ members ]
        : [];

    return (
        <div
            ref={ref}
            className={cn(style.row, { [style.hero]: Boolean(hero), })}
            style={{ [MASCOT_CSS_PROP]: mascot }}
        >
            <h2 className={cn('ktl-h2', style.title)}>{name}</h2>

            <ul className={style.members}>{persons.map((person, i) => {
                const props = !hero ? {} : {
                    avatar: true,
                    size: 'xl',
                    position: i + 1,
                    onHover: hero ? onHover : null,
                };

                return (
                    <li key={i} className={style.member}>
                        <Person {...props} {...person}/>
                    </li>
                );
            })}</ul>

            <div className={cn(textCn('ktl-text-1'), style.description)}>
                {children}
            </div>
        </div>
    );
}

