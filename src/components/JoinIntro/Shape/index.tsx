import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import cn from 'classnames';
import * as list from '../highlights.module.css';
import { IntroSection } from '../section';
import imgSectionLarge from './images/section-large.png';
import imgSection from './images/section.png';
import * as styles from './shape.module.css';

export function ShapeSection() {
  const textCn = useTextStyles();

  return (
    <IntroSection className={styles.section} imageClassName={styles.image} image={imgSection}>
      <div className={styles.wrap}>
        <p className={cn(styles.shadow)} role="none">
          <img className={styles.image} src={imgSectionLarge} alt="" height="400" width="400" />
        </p>
        <h2 className={cn('ktf-h2 ktl-text--rainbow', styles.title)}>
          Shape the future <br className={styles.titleBr} />
          of the ecosystem
        </h2>
        <ul className={list.highlights}>
          <li className={cn(textCn('ktl-text-2'), list.highlight, styles.sustain)}>
            Help sustain the Kotlin ecosystem by providing financial support and <br className={styles.brGuidance} />
            guidance to the maintainers of open-source projects.
          </li>
          <li className={cn(textCn('ktl-text-2'), list.highlight, styles.contribute)}>
            Contribute to the boards, committees, <br className={styles.brFunding} />
            and workgroups that <br className={styles.brMake} />
            make decisions on <br className={styles.brFunding} />
            funding distribution and the Foundation’s overall strategy.
          </li>
        </ul>
      </div>
    </IntroSection>
  );
}
