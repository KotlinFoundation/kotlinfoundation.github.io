import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';

import { KtlLayout } from '../KtlLayout';
import { BrandSection } from './Brand';
import { OpenerSection } from './Opener';
import { ShapeSection } from './Shape';

import * as styles from './intro.module.css';

export function Intro() {
  return (
    <div className={styles.intro}>
      <KtlLayout>
        <OpenerSection />
        <ShapeSection />
        <BrandSection />
      </KtlLayout>
    </div>
  );
}
