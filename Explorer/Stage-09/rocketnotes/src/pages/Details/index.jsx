import { Container, Links, Content } from './style.js';
import { Button } from '../../components/Button/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { TextButton } from '../../components/TextButton/index.jsx';

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Content>
            <TextButton title="Excluir nota" />
            <h1>Introdução ao React</h1>
            <p>
              Tempor ut consectetur Lorem dolore eu irure. Officia cillum nulla
              irure anim voluptate incididunt pariatur. Laborum anim veniam
              Lorem sit consequat magna aute irure cupidatat velit labore eu
              tempor voluptate. Sit ex labore incididunt voluptate qui sint id
              fugiat officia laborum.
            </p>
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
            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="node" />
            </Section>
            <Button text="Voltar" />
          </Content>
        </main>
      </Container>
    </>
  );
}
