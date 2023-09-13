import { Container } from './style.js';
import { Button } from '../../components/Button/index.jsx';

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Edson Pimenta</span>
      <Button text={'Voltar'} />
    </Container>
  );
}
