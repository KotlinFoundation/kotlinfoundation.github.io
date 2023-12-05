import { CtaBlock } from '@jetbrains/kotlin-web-site-ui/out/components/cta-block-v2';
import cn from 'classnames';
import { Link } from '../Link';
import * as styles from './contactUs.module.css';

const contactEmail = 'hello@kotlinfoundation.org';

export function ContactUs() {
  return (
    <CtaBlock
      topTitle={
        <>
          Still have questions? <br className={styles.br} />
          Contact us!
        </>
      }
      classMainTitle={cn('ktf-h2', 'ktf-h4--tm', 'ktf-h3--ts', styles.mainTitle)}
      mainTitle={
        <Link href={`mailto:${contactEmail}`} mode="clear">
          {contactEmail}
        </Link>
      }
    />
  );
}
