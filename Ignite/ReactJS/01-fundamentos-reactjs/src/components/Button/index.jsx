import styles from './styles.module.css';

export function Button({ text, fitContent = false }) {
  return (
    <button
      className={`${styles.button} ${fitContent && styles.fit_content}`}
      type="button"
      title="Publicar meu comentário"
    >
      {text}
    </button>
  );
}
