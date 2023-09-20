import { Container } from './style';

export function TextArea({ ...rest }) {
  return (
    <Container>
      <textarea {...rest} />
    </Container>
  );
}
