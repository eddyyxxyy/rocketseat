import styles from './styles.module.css';

export function Modal({
  title,
  content,
  closeModal,
  buttonSubmitText,
  buttonCancelText,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <h2>{title}</h2>
          <p>{content}</p>
          <div className={styles.alternatives}>
            <button
              className={styles.cancel}
              type="button"
              title={buttonCancelText}
              onClick={closeModal}
            >
              {buttonCancelText}
            </button>
            <button
              className={styles.submit}
              type="button"
              title={buttonSubmitText}
              onClick={closeModal}
            >
              {buttonSubmitText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
