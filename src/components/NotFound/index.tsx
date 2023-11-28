import Button from '@rescui/button';
import { ArrowRightIcon } from '@rescui/icons';
import { Link } from 'gatsby';

import * as styles from './notFound.module.css';

type NotFoundProps = {
  children?: JSX.Element;
};

export const NotFound = ({ children }: NotFoundProps) => (
  <div className={styles.notFound}>
    <div className={styles.content}>
      {children}
      <Link to="/" className={styles.link}>
        <Button mode="outline" className={styles.btn} icon={<ArrowRightIcon />} iconPosition="right">
          Homepage
        </Button>
      </Link>
    </div>
  </div>
);
