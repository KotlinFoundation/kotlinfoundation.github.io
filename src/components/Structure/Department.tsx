import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import cn from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import shuffle from 'lodash/shuffle';
import { forwardRef, HTMLAttributes, memo, RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Person, PersonProps } from '../Person';
import * as style from './structure.module.css';

export const PersonPure = memo(Person);

type MembersProps = {
  className?: string;
  list: PersonProps[];
} & HTMLAttributes<HTMLUListElement> & {
    style: { '--person-mascot-url'?: string | null };
  };

const Members = forwardRef(({ className, list, ...props }: MembersProps, ref: RefObject<HTMLUListElement>) => {
  return (
    <ul {...props} ref={ref} className={cn(style.members, className)}>
      {list.map((person, i) => (
        <li key={i} className={style.member}>
          <PersonPure {...person} />
        </li>
      ))}
    </ul>
  );
});

Members.displayName = 'Members';

function createShuffledList(length, previousIndex = null) {
  const lastIndex = length - 1;
  const list = shuffle(Array.from({ length }, (_, i) => i));

  // prevent repeating: if last index the same as in previous put list, put it on random position except last.
  if (list[lastIndex] === previousIndex) {
    const randomIndex = Math.floor(Math.random() * lastIndex);
    const val = list[randomIndex];
    list[randomIndex] = list[lastIndex];
    list[lastIndex] = val;
  }

  return list;
}

function useWightedRandomRange(limitValue): [number, () => void] {
  const [list, setList] = useState(() => createShuffledList(limitValue));
  const [value, setValue] = useState(() => list[list.length - 1]);

  const nextValue = useCallback(() => {
    let tail = list;
    const lastIndex = tail.pop();
    if (tail.length === 0) {
      setList((tail = createShuffledList(limitValue, lastIndex)));
    }
    setValue(tail[tail.length - 1]);
  }, [list, setValue]);

  return [value, nextValue];
}

const MASCOT_CSS_PROP = '--person-mascot-url';

type HeroMembersProps = {
  list: PersonProps[];
} & HTMLAttributes<HTMLUListElement>;

const MAX_VARIATION_COUNT = 5;

function HeroMembers({ list, ...props }: HeroMembersProps) {
  const ref = useRef(null);

  const {
    allFile: { nodes: mascots },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { glob: "mascots/*.svg" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);

  const [mascotN, changeMascot] = useWightedRandomRange(mascots.length);
  const [isInteracted, setInteract] = useState(true);

  const onHover = useCallback(() => {
    setInteract(true);
  }, [setInteract]);
  const onLeave = useCallback(() => {
    changeMascot();
  }, [changeMascot]);

  useLayoutEffect(() => setInteract(false), []); // only for browser

  const mascot = mascots[mascotN];

  return (
    <Members
      {...props}
      ref={ref}
      style={{ [MASCOT_CSS_PROP]: `url("${mascot.publicURL}")` }}
      list={list.map((person, i) => ({
        avatar: isInteracted || i !== 1 ? true : 'asIdle',
        variation: String((i % MAX_VARIATION_COUNT) + 1),
        size: 'Xl',
        xlWidth: list.length < 7 && (list.length === 6 ? 'Wide' : 'UltraWide'),
        onMouseLeave: onLeave,
        onMouseEnter: isInteracted ? null : onHover,
        ...person,
      }))}
    />
  );
}

type DepartmentProps = {
  hero?: boolean;
  name: string;
  members: PersonProps[] | PersonProps;
  children?: JSX.Element;
};

export function Department({ hero = false, name, members, children }: DepartmentProps) {
  const textCn = useTextStyles();

  const persons = members ? (Array.isArray(members) ? members : [members]) : [];

  const MembersTag = hero ? HeroMembers : Members;

  return (
    <div className={cn(style.row, { [style.hero]: Boolean(hero) })}>
      <h2 className={cn('ktl-h2', style.title)}>{name}</h2>
      <MembersTag list={persons} />
      <div className={cn(textCn('ktl-text-1'), style.description)}>{children}</div>
    </div>
  );
}
