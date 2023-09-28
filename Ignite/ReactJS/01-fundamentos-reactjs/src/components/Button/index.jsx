import styles from './styles.module.css';

export function Button({ text, iconUrl }) {
  return (
    <button className={styles.button} type="button">
      {iconUrl && (
        <div className={styles.img_wrapper}>
          <img className={styles.img} src={iconUrl} />
        </div>
      )}
      {text}
    </button>
  );
}
