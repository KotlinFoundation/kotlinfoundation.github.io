import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';
import { useTextStyles } from '@rescui/typography';
import cn from 'classnames';
import { FC } from 'react';
import { KtlLayout } from '../KtlLayout';
import introJPG from './intro/intro.jpg';

import * as styles from './introBanner.module.css';

interface IntroBannerProps {
  title: string;
  members: Array<Group>;
}

interface Group {
  groupName: string;
  companies: Array<Company>;
}

interface Company {
  name: string;
  image: string;
  url?: string;
}

export const IntroBanner: FC<IntroBannerProps> = ({ title, members }) => {
  const textCn = useTextStyles();

  return (
    <section className={styles.section}>
      <KtlLayout spacing className={styles.intro}>
        <img src={introJPG} alt="" className={styles.image} />

        <h1 className={cn('ktf-h1 ktf-h2--tl ktf-h3--ts', styles.title)}>{title}</h1>

        <div className={styles.companies}>
          {members.map(({ groupName, companies }) => (
            <div className={styles.companiesGroup} key={groupName}>
              <div className={textCn('rs-text-2', { hardness: 'hard' })}>{groupName}</div>
              <div className={styles.companiesLogos}>
                {companies.map(({ name, image, url }) => {
                  let content = <img key={name} alt={`${name} Logo`} src={image} className={styles.companyLogo} />;

                  if (url) {
                    content = (
                      <a href={url} target="_blank" rel="noreferrer noopener" className={styles.companyLink}>
                        {content}
                      </a>
                    );
                  }
                  return (
                    <div key={url || name} className={styles.company}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </KtlLayout>
    </section>
  );
};
