import { Container, NoteContent } from './style';
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
        <NoteContent>
          <p>
            Elit qui incididunt eiusmod velit veniam sit occaecat. Ullamco aute
            eu exercitation mollit. Officia enim eu enim officia reprehenderit
            ex consequat velit reprehenderit pariatur in sint anim sint. Elit
            qui incididunt eiusmod velit veniam sit occaecat. Ullamco aute eu
            exercitation mollit. Officia enim eu enim officia reprehenderit ex
            consequat velit reprehenderit pariatur in sint anim sint. Elit qui
            incididunt eiusmod velit veniam sit occaecat. Ullamco aute eu
            exercitation mollit. Officia enim eu enim officia reprehenderit ex
            consequat velit reprehenderit pariatur in sint anim sint. Elit qui
            incididunt eiusmod velit veniam sit occaecat. Ullamco aute eu
            exercitation mollit. Officia enim eu enim officia reprehenderit ex
            consequat velit reprehenderit pariatur in sint anim sint. Elit qui
            incididunt eiusmod velit veniam sit occaecat. Ullamco aute eu
            exercitation mollit. Officia enim eu enim officia reprehenderit ex
            consequat velit reprehenderit pariatur in sint anim sint.
          </p>
          <p>
            Deserunt occaecat magna ullamco do amet duis anim incididunt irure
            culpa magna. Aute voluptate culpa sint sunt. Duis magna do culpa do
            consectetur Lorem ullamco ut pariatur aute Lorem sint enim. Culpa
            voluptate cillum laboris aliquip qui duis aute sint cillum voluptate
            proident nisi. Officia non dolore irure adipisicing non proident
            veniam dolor incididunt nisi elit magna. Veniam est laborum non
            eiusmod deserunt eu aliquip incididunt ex exercitation eu fugiat do.
            Nulla laboris eiusmod consequat consectetur. Deserunt occaecat magna
            ullamco do amet duis anim incididunt irure culpa magna. Aute
            voluptate culpa sint sunt. Duis magna do culpa do consectetur Lorem
            ullamco ut pariatur aute Lorem sint enim. Culpa voluptate cillum
            laboris aliquip qui duis aute sint cillum voluptate proident nisi.
            Officia non dolore irure adipisicing non proident veniam dolor
            incididunt nisi elit magna. Veniam est laborum non eiusmod deserunt
            eu aliquip incididunt ex exercitation eu fugiat do. Nulla laboris
            eiusmod consequat consectetur. Deserunt occaecat magna ullamco do
            amet duis anim incididunt irure culpa magna. Aute voluptate culpa
            sint sunt. Duis magna do culpa do consectetur Lorem ullamco ut
            pariatur aute Lorem sint enim. Culpa voluptate cillum laboris
            aliquip qui duis aute sint cillum voluptate proident nisi. Officia
            non dolore irure adipisicing non proident veniam dolor incididunt
            nisi elit magna. Veniam est laborum non eiusmod deserunt eu aliquip
            incididunt ex exercitation eu fugiat do. Nulla laboris eiusmod
            consequat consectetur. Deserunt occaecat magna ullamco do amet duis
            anim incididunt irure culpa magna. Aute voluptate culpa sint sunt.
            Duis magna do culpa do consectetur Lorem ullamco ut pariatur aute
            Lorem sint enim. Culpa voluptate cillum laboris aliquip qui duis
            aute sint cillum voluptate proident nisi. Officia non dolore irure
            adipisicing non proident veniam dolor incididunt nisi elit magna.
            Veniam est laborum non eiusmod deserunt eu aliquip incididunt ex
            exercitation eu fugiat do. Nulla laboris eiusmod consequat
            consectetur.
          </p>
          <p>
            Eu fugiat irure minim nulla non veniam. Ullamco labore excepteur
            commodo enim consectetur. Est ea laborum nostrud occaecat enim
            adipisicing occaecat adipisicing velit occaecat exercitation est.
            Aute dolore laborum tempor anim dolor duis voluptate.
          </p>
        </NoteContent>
      </main>
    </Container>
  );
}
