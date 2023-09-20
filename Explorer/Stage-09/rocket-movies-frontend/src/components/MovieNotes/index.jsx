import { MovieNote } from '../MovieNote';
import { Container } from './style';

export function MovieNotes({ notes }) {
  return (
    <Container>
      {notes.map((note, i) => (
        <MovieNote key={i} {...note} />
      ))}
    </Container>
  );
}
