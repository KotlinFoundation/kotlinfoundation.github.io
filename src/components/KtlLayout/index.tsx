import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';
import { cls } from '../../utlis';
import * as styles from './ktlLayout.module.css';

type KtlLayoutProps = {
  className?: string;
  center?: boolean;
  spacing?: boolean;
  addExtraSpace?: boolean;
  children?: JSX.Element | JSX.Element[];
};

export function KtlLayout({ center = true, spacing = false, addExtraSpace = false, ...props }: KtlLayoutProps) {
  return (
    <div
      {...cls(props, 'ktl-layout', {
        'ktl-layout--center': center,
        'ktl-layout--spacing': spacing,
        [styles.extraSpace]: addExtraSpace,
      })}
    />
  );
}
