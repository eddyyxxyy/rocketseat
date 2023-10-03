import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, TPost } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts: TPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph' as 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph' as 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link' as 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-30 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph' as 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph' as 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link' as 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-10-01 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
