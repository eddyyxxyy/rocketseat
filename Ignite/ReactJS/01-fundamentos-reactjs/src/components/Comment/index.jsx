import { useState } from 'react';

import { Modal } from '../Modal';
import { ApplaudButton } from '../ApplaudButton';

import styles from './styles.module.css';
import { hourDiff } from '../../utils/hourDiff';

export function Comment({
  userName,
  avatarUrl,
  timestamp,
  comment,
  applaudStart,
}) {
  const user = { name: 'Leslie Alexander' };

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          title="Excluir comentário"
          content="Você tem certeza que gostaria de excluir este comentário?"
          buttonCancelText="Cancelar"
          buttonSubmitText="Sim, excluir"
          closeModal={closeModal}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.avatar_wrapper}>
          <img
            className={styles.img}
            src={`${avatarUrl}`}
            alt={`${userName} profile picture`}
          />
        </div>
        <div className={styles.content}>
          {user.name === userName && (
            <button
              className={styles.remove_icon}
              type="button"
              title="Remover comentário"
              onClick={openModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.25 5.25H3.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.75 9.75V15.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.25 9.75V15.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <p className={styles.user_name}>
            {userName} {user.name === userName && <span>(Você)</span>}
          </p>
          <span className={styles.timestamp}>
            Cerca de {hourDiff(timestamp)}h
          </span>
          <p className={styles.comment}>{comment}</p>
        </div>
      </div>
      <ApplaudButton applaudStart={applaudStart} />
    </>
  );
}
