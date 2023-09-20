import { Container } from './style';

export function Tag({ title, ...rest }) {
  return (
    <Container to={`/?tags=${title}`} {...rest}>
      <p>{title}</p>
    </Container>
  );
}
