import { Container } from './style';
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { NoteHeader } from '../../components/NoteHeader';
import { NoteAuthor } from '../../components/NoteAuthor';
import { Tag } from '../../components/Tag';
import { FiArrowLeft } from 'react-icons/fi';
import { Tags } from '../../components/Tags';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <TextButton icon={FiArrowLeft} text="Go back" $isactive to="/" />
        <NoteHeader heading="The Lord of the Rings" rating={4} inDetailView />
        <NoteAuthor
          avatarImgSrc="https://github.com/eddyyxxyy.png"
          name="Edson Pimenta"
          createdAt="19/09/2023 às 21:00"
        />
        <Tags>
          <Tag title="fantasy" />
          <Tag title="adventure" />
        </Tags>
      </main>
    </Container>
  );
}
