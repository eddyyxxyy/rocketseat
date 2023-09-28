import styles from './styles.module.css';

export function Profile({ avatarUrl, userName, userWork, sideMenu = false }) {
  return (
    <div className={!sideMenu ? styles.profile_post : styles.profile_side_menu}>
      <a
        href="#"
        rel="noreferrer"
        className={
          !sideMenu ? styles.img_wrapper_post : styles.img_wrapper_side_menu
        }
      >
        <img
          className={styles.img}
          src={avatarUrl}
          alt={`${userName} profile picture`}
        />
      </a>
      <div className={styles.info}>
        <p
          className={
            !sideMenu ? styles.user_name_post : styles.user_name_side_menu
          }
        >
          <a href="#" rel="noreferrer">
            {' '}
            {userName}
          </a>
        </p>
        <span
          className={
            !sideMenu ? styles.user_work_post : styles.user_work_side_menu
          }
        >
          {userWork}
        </span>
      </div>
      {sideMenu && <div className="divider"></div>}
    </div>
  );
}
