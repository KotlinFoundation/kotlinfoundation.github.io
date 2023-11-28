import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import { HTMLAttributes } from 'react';
import { cls } from '../../utlis';

import * as style from './faq.module.css';

export function Question(props: HTMLAttributes<HTMLDListElement>) {
  return <dt {...cls(props, style.question, 'ktl-h3 ktl-offset-bottom-s')} />;
}

export function Answer(props: HTMLAttributes<HTMLDListElement>) {
  const textCn = useTextStyles();
  return <dd {...cls(props, style.answer, textCn('ktl-text-1'), 'ktl-offset-bottom-l')} />;
}

export function FAQ(props: HTMLAttributes<HTMLDListElement>) {
  return <dl {...cls(props, style.faq)} />;
}
