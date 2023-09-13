import { Container } from './style';

export function TextButton({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}
