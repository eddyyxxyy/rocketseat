import { Container } from './style';

export function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon && <icon />}
      <input {...rest} />
    </Container>
  );
}
