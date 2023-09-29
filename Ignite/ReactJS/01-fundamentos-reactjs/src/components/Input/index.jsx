import styles from './styles.module.css';

export function Input({ placeholder, labelText, labelFor, required = false }) {
  return (
    <div className={styles.wrapper}>
      {labelText && (
        <label className={styles.label} htmlFor={labelFor}>
          {labelText}
        </label>
      )}
      <textarea
        className={styles.textarea}
        name={labelFor}
        type="text"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
