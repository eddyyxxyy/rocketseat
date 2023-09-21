import { Container, Links, Content } from './style.js';
import { Button } from '../../components/Button/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { TextButton } from '../../components/TextButton/index.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';

export function Details() {
  const params = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente deletar a nota?');

    if (confirm) {
      await api.delete(`/notes/${note.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setNote(response.data);
    }

    fetchNote();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <main>
          <Content>
            <TextButton title="Excluir nota" onClick={handleRemove} />
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <Section title="Links úteis">
              <Links>
                {note.links &&
                  note.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
              </Links>
            </Section>
            <Section title="Marcadores">
              {note.tags &&
                note.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
            </Section>
            <Button text="Voltar" onClick={handleGoBack} />
          </Content>
        </main>
      </Container>
    </>
  );
}
