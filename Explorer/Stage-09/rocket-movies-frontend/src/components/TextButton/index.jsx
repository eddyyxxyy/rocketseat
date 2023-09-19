import { Container } from './style';

export function TextButton({ text, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive} {...rest}>
      {text}
    </Container>
  );
}
