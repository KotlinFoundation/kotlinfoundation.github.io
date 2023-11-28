import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import cn from 'classnames';

import * as styles from './tier.module.css';

type TierProps = {
  className?: string;
  title: string;
  price: string;
  children?: JSX.Element | JSX.Element[];
};

export function Tier({ className, title, price, children }: TierProps) {
  const textCn = useTextStyles();
  return (
    <div className={cn(styles.tier, className)}>
      <h3 className="ktf-h2">{title}</h3>
      <div className={styles.content}>{children}</div>
      <p className={textCn('ktl-text-1')}>{price}</p>
    </div>
  );
}
