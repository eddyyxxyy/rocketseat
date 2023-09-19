import { Container } from './style';

export function TextButton({ text, icon: Icon, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive} {...rest}>
      {Icon && <Icon size={20} />}
      {text}
    </Container>
  );
}
