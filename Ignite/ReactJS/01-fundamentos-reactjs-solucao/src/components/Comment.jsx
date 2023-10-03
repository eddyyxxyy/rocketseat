import { Avatar } from './Avatar';

import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/eddyyxxyy.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Edson Pimenta</strong>

              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
