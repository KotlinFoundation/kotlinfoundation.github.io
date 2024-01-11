import * as styles from './pairedBlock.module.css';

type PairedBlockProps = {
  left: JSX.Element;
  right: JSX.Element;
};

export function PairedBlock({ left, right }: PairedBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>{left}</div>
      <div className={styles.item}>{right}</div>
    </div>
  );
}
