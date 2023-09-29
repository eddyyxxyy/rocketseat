import { Header } from '../../components/Header';
import { ProfileSideMenu } from '../../components/ProfileSideMenu';
import { Post } from '../../components/Post';

import leslieAlexanderProfilePicture from '../../assets/leslie-alexander.png';
import janeCooperProfilePicture from '../../assets/jane-cooper.jpg';
import devonLaneProfilePicture from '../../assets/devon-lane.jpeg';

import janeCooperPostContent from '../../postsDataMock/janeCooper.json';
import devonLanePostContent from '../../postsDataMock/devonLane.json';

import styles from './styles.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <ProfileSideMenu
          avatarUrl={leslieAlexanderProfilePicture}
          userName={'Leslie Alexander'}
          userWork={'UI Designer'}
        />
        <main className={styles.posts}>
          <Post
            profile={{
              avatarUrl: janeCooperProfilePicture,
              userName: 'Jane Cooper',
              userWork: 'Dev Front End',
            }}
            content={janeCooperPostContent}
          />
          <Post
            profile={{
              avatarUrl: devonLaneProfilePicture,
              userName: 'Devon Lane',
              userWork: 'Dev Front End',
            }}
            content={devonLanePostContent}
          />
        </main>
      </div>
    </div>
  );
}
