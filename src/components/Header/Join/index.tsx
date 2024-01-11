import { Link } from '../../Link';

import * as style from './join.module.css';

export function JoinLink() {
  return (
    <Link className={style.join} activeClassName={style.active} mode="clear" href="/join">
      Join
    </Link>
  );
}
