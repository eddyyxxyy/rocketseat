import { Container, ContentHeader } from './style';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MovieNotes } from '../../components/MovieNotes';

const notes = [
  {
    title: 'The Lord of the Rings',
    description:
      'Sit tempor duis consequat velit magna est laborum adipisicing consectetur cupidatat tempor sint. Deserunt cupidatat duis elit reprehenderit culpa ea ea velit eiusmod laborum culpa. Cupidatat est qui ipsum ut consectetur mollit ad non eu reprehenderit irure dolor reprehenderit ea. Non veniam aliqua consectetur consectetur do incididunt labore id ad laboris.',
    rating: 4,
    tags: ['fantasy', 'adventure'],
  },
  {
    title: 'The Lord of the Rings',
    description:
      'Velit fugiat voluptate ipsum deserunt Lorem deserunt ea aliqua ad ex eu aliquip pariatur elit. Tempor adipisicing aute sit voluptate quis dolor adipisicing anim consectetur ipsum dolor ipsum occaecat. Enim ad reprehenderit veniam id do elit quis ullamco ullamco culpa ullamco. Fugiat tempor reprehenderit duis esse. Irure cillum dolor do consequat id non dolore minim reprehenderit et id. Esse id enim officia dolore in ad.',
    rating: 4,
    tags: ['fantasy', 'adventure'],
  },
  {
    title: 'The Lord of the Rings',
    description:
      'Aute irure id incididunt do culpa. Consequat nisi excepteur non aliqua reprehenderit dolore ullamco magna aute ipsum ea culpa laboris. Culpa pariatur cillum do aute culpa excepteur exercitation consequat reprehenderit adipisicing ullamco est. Adipisicing cillum anim proident magna fugiat fugiat ullamco fugiat. Do non sit mollit eu laboris consequat sit duis irure incididunt.',
    rating: 4,
    tags: ['fantasy', 'adventure'],
  },
  {
    title: 'The Lord of the Rings',
    description:
      'Commodo ex aute nostrud tempor do amet excepteur ut nostrud ex. Ut Lorem tempor id laborum. Labore cillum do cupidatat dolor aliqua. Ipsum Lorem deserunt qui deserunt.',
    rating: 4,
    tags: ['fantasy', 'adventure'],
  },
  {
    title: 'The Lord of the Rings',
    description:
      'Lorem amet nostrud mollit nostrud nostrud voluptate. Anim aliquip ad exercitation excepteur pariatur. Officia do ad sint consequat. Est esse pariatur ad in nostrud nostrud mollit qui nulla consectetur. Nulla reprehenderit laborum laboris et amet elit nostrud excepteur deserunt ad ex.',
    rating: 4,
    tags: ['fantasy', 'adventure'],
  },
  {
    title: 'The Lord of the Rings',
    description:
      'Deserunt ex ipsum reprehenderit laborum Lorem ea sint consectetur. Excepteur deserunt dolor laboris anim sunt. Cupidatat do deserunt ullamco ad mollit. Mollit id consequat amet anim eiusmod deserunt quis ex quis occaecat excepteur duis quis. Non exercitation officia officia magna magna nulla et commodo Lorem velit. Voluptate dolor nulla elit cillum do nulla esse sunt voluptate fugiat nostrud minim. In veniam excepteur Lorem elit ut.',
    rating: 4,
    tags: ['fantasy', 'adventure'],
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <ContentHeader>
          <h1>My movie notes</h1>
          <Link to="/new-note">
            <Button icon={FiPlus} iconSize={20} text="Add a new note" />
          </Link>
        </ContentHeader>
        <MovieNotes notes={notes} />
      </main>
    </Container>
  );
}
