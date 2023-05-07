import {forwardRef, HTMLAttributes, memo, RefObject, useCallback, useLayoutEffect, useRef, useState} from "react";
import cn from "classnames";
import {graphql, useStaticQuery} from "gatsby";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import {Person, PersonProps} from "../Person";

import * as style from "./structure.module.css";

export const PersonPure = memo(Person);

type MembersProps = {
    className?: string,
    list: PersonProps[],
} & HTMLAttributes<HTMLUListElement>;

const Members = forwardRef(({ className, list, ...props }: MembersProps, ref: RefObject<HTMLUListElement>) => {
    return (
        <ul {...props} ref={ref} className={cn(style.members, className)}>{
            list.map((person, i) => (
                <li key={i} className={style.member}>
                    <PersonPure {...person}/>
                </li>
            ))
        }</ul>
    );
});

function randomMascotUrl(mascots) {
    return `url("${mascots[Math.floor(Math.random() * mascots.length)].publicURL}")`;
}

const MASCOT_CSS_PROP = '--person-mascot-url';

function HeroMembers({ list, ...props }) {
    const ref = useRef(null);

    const { allFile: { nodes: mascots } } = useStaticQuery(graphql`query {
        allFile(filter: {relativePath: {glob: "mascots/*.svg"}}) {
            nodes {
                publicURL
            }
        }
    }`);

    const [ mascot, setMascot ] = useState(randomMascotUrl(mascots));
    const [ isInteracted, setInteract ] = useState(true);

    const onHover = useCallback(() => setInteract(true), []);
    const onLeave = useCallback((e) => {
        if (ref && ref.current) {
            let url;
            const currentUrl = ref.current.style.getPropertyValue(MASCOT_CSS_PROP);

            do {
                url = randomMascotUrl(mascots);
            } while (url === currentUrl);

            setMascot(url);
        }
    }, [ ref, setMascot ]);

    useLayoutEffect(() => setInteract(false), []); // only for browser

    return <Members {...props} ref={ref} style={{ [MASCOT_CSS_PROP]: mascot }} list={list.map(
        (person, i) => ({
            avatar: isInteracted || i !== 1 ? true : 'asIdle',
            variation: String(i + 1),
            size: 'xl',
            onMouseLeave: onLeave,
            onMouseEnter: isInteracted ? null : onHover,
            ...person,
        })
    )}/>;
}

export function Department({hero = false, name, members, children}) {
    const textCn = useTextStyles();

    const persons = members
        ? Array.isArray(members) ? members : [ members ]
        : [];

    const MembersTag = hero ? HeroMembers : Members;

    return (
        <div className={cn(style.row, { [style.hero]: Boolean(hero), })}>
            <h2 className={cn('ktl-h2', style.title)}>{name}</h2>
            <MembersTag list={persons}/>
            <div className={cn(textCn('ktl-text-1'), style.description)}>
                {children}
            </div>
        </div>
    );
}
