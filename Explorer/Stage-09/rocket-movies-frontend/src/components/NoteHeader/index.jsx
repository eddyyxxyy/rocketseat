import { Container, Rating } from './style';
import { BsStar, BsStarFill } from 'react-icons/bs';

export function NoteHeader({ heading, rating, inDetailView = false }) {
  let stars = new Array(5).fill(<BsStar size={inDetailView ? 20 : 12} />);
  for (let i = 0; i < rating; i++) {
    stars[i] = <BsStarFill size={inDetailView ? 20 : 12} />;
  }

  return (
    <Container $indetail={inDetailView}>
      <h1>{heading}</h1>
      <Rating>{...stars}</Rating>
    </Container>
  );
}
