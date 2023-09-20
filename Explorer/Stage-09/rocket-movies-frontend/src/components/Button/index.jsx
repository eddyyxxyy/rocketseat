import { Container } from './style';

export function Button({ text, icon: Icon, iconSize, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={iconSize} />}
      {text}
    </Container>
  );
}
