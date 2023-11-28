import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import cn from 'classnames';

import { Link } from '../../Link';
import { IntroSection } from '../section';

import imgSection from './images/section.png';
import * as styles from './opener.module.css';

export function OpenerSection() {
  const textCn = useTextStyles();
  const contactLink = <Link href="mailto:hello@kotlinfoundation.org">hello@kotlinfoundation.org</Link>;

  return (
    <IntroSection className={styles.section} imageClassName={styles.image} image={imgSection} showImage={true}>
      <h1 className="ktf-h2">Join the Kotlin Foundation</h1>
      <p className={cn(textCn('ktl-text-2'), 'ktf-para', styles.description)}>
        Shape the future of the language ecosystem and create a brand connection between Kotlin and your company.
      </p>
      <p className={cn(textCn('ktl-text-2'), styles.contact)}>
        <span className={styles.mobile}>
          Want to apply? Contact <br />
          {contactLink}
        </span>
        <span className={styles.desktop}>Contact {contactLink} to apply.</span>
      </p>
    </IntroSection>
  );
}
