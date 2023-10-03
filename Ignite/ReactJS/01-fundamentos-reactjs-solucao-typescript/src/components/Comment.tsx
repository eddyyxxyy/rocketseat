import { Avatar } from './Avatar';

import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { useState } from 'react';

type TCommentProps = {
  content: string,
  onDeleteComment: (commentToDelete: string) => void,
}

export function Comment({ content, onDeleteComment }: TCommentProps) {
  const [applaud, setApplaud] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleApplaud() {
    setApplaud((prevState) => prevState + 1);
  }

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
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleApplaud}>
            <ThumbsUp /> Apludir <span>{applaud}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
