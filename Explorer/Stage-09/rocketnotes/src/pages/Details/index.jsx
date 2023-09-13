import { Container, Links } from './style.js';
import { Button } from '../../components/Button/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <Section title="Links úteis">
          <Links>
            <li>
              <a href="#">https://www.rocketseat.com.br/</a>
            </li>
            <li>
              <a href="#">https://www.rocketseat.com.br/</a>
            </li>
          </Links>
        </Section>
        <Button text="Voltar" />
      </Container>
    </>
  );
}
