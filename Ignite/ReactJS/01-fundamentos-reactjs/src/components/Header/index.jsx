import igniteSymbol from '../../assets/ignite-symbol.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.img_wrapper}>
        <img className={styles.img} src={igniteSymbol} alt="Ignite symbol" />
      </div>
      <strong>Ignite Feed</strong>
    </header>
  );
}
