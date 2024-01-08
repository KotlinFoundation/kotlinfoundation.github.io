import cn from 'classnames';
import * as styles from './section.module.css';

type IntroSectionProps = {
  className?: string;
  imageClassName?: string;
  children: JSX.Element | JSX.Element[];
  image: string;
  showImage?: boolean;
};

export function IntroSection({
  className = null,
  imageClassName = null,
  children,
  image,
  showImage = false,
}: IntroSectionProps) {
  return (
    <section className={cn(className, styles.section, { [styles.showImage]: Boolean(showImage) })}>
      <p className={cn(styles.shadow, imageClassName)} role="none">
        <img className={styles.image} src={image} alt="" />
      </p>
      {children}
    </section>
  );
}
