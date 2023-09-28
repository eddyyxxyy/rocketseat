import igniteSymbol from '../../assets/ignite-symbol.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header>
      <div>
        <img src={igniteSymbol} alt="Ignite symbol" />
      </div>
      <strong>Ignite Feed</strong>
    </header>
  );
}
