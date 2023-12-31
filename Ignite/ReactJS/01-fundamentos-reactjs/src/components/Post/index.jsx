import { v4 as uuidv4 } from 'uuid';

import { Profile } from '../Profile';
import { Input } from '../Input';
import { Button } from '../Button';
import { Comment } from '../Comment';

import styles from './styles.module.css';
import { hourDiff } from '../../utils/hourDiff';

export function Post({ profile, content }) {
  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <Profile
          avatarUrl={profile.avatarUrl}
          userName={profile.userName}
          userWork={profile.userWork}
        />
        <span>Publicado há {hourDiff(content.createdAt)}h</span>
      </div>
      <div className={styles.post_content}>
        {content.content.map((row) => (
          <p key={uuidv4()}>{row}</p>
        ))}
        {content.links.map((link) => (
          <a key={uuidv4()} href="#" rel="noreferrer">
            {link}
          </a>
        ))}
        <div className={styles.hashtags}>
          {content.hashtags.map((hashtag) => (
            <a key={uuidv4()} href="#" rel="noreferrer">
              {hashtag}
            </a>
          ))}
        </div>
      </div>
      <div className="divider"></div>
      <form className={styles.comment}>
        <Input
          label="Deixe seu feedback"
          labelFor="feedback-comment"
          labelText="Deixe seu feedback"
          placeholder="Escreva um comentário..."
        />
        <Button text="Publicar" fitContent />
      </form>
      {content.comments &&
        content.comments.map((comment) => (
          <Comment
            key={uuidv4()}
            userName={comment.user}
            avatarUrl={comment.avatarUrl}
            timestamp={comment.timestamp}
            comment={comment.comment}
            applaudStart={comment.applaudStart}
          />
        ))}
    </article>
  );
}
