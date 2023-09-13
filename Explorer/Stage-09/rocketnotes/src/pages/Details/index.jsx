import { Container } from './style.js';
import { Button } from '../../components/Button/index.jsx';
import { Header } from '../../components/Header/index.jsx';

export function Details() {
  return (
    <>
      <Header />
      <Container>
        <Button text={'Voltar'} />
      </Container>
    </>
  );
}
