import cn from 'classnames';
import { Link as GatsbyLink } from 'gatsby-link';

import KotlinLogo from '../../../images/kotlin-logo.inline.svg';

import * as style from './logo.module.css';

type LogoProps = {
  sidebar?: boolean;
};

export function Logo({ sidebar = false }: LogoProps) {
  return (
    <>
      <GatsbyLink className={style.logo} to="/">
        <div className={style.image}>
          <KotlinLogo />
        </div>
        <div
          className={cn('ktf-h3 ktf-h4--tm', style.text, {
            [style.textSidebar]: sidebar,
          })}
        >
          Kotlin Foundation
        </div>
      </GatsbyLink>
    </>
  );
}
