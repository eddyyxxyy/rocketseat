import { Container } from './style';

export function Tag({ title, inDetailView = false, ...rest }) {
  return (
    <Container to={`/?tags=${title}`} $indetailview={inDetailView} {...rest}>
      <p>{title}</p>
    </Container>
  );
}
