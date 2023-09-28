import { Profile } from '../Profile';
import { Button } from '../Button';

import profileSideMenuTopBackground from '../../assets/profile-side-menu-top-background.jpg';
import pencilIcon from '../../assets/pencil-icon.svg';

import styles from './styles.module.css';

export function ProfileSideMenu({ avatarUrl, userName, userWork }) {
  return (
    <aside className={styles.profile_side_menu}>
      <div className={styles.container}>
        <div className={styles.img_wrapper}>
          <img
            className={styles.img}
            src={profileSideMenuTopBackground}
            alt="Plants over white background"
          />
        </div>
        <div>
          <Profile
            avatarUrl={avatarUrl}
            userName={userName}
            userWork={userWork}
            sideMenu={true}
          />
        </div>
        <div className={styles.footer}>
          <Button iconUrl={pencilIcon} text="Editar o seu perfil" />
        </div>
      </div>
    </aside>
  );
}
