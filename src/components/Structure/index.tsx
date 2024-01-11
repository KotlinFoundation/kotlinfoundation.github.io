import { HTMLAttributes } from 'react';
import { cls } from '../../utlis';
import * as style from './structure.module.css';

export function Structure(props: HTMLAttributes<HTMLDivElement>) {
  return <section {...cls(props, style.root)} />;
}
