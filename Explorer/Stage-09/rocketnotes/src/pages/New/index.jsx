import { Container, Form } from './style';

import { useState } from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleLinkAddition(event) {
    if (!newLink) {
      return;
    }
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleTagAddition(event) {
    if (!newTag) {
      return;
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota.');
    }
    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clicou em adicionar.\n\nClique em adicionar ou deixe o campo vazio.'
      );
    }
    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.\n\nClique em adicionar ou deixe o campo vazio.'
      );
    }

    await api.post('/notes', { title, description, links, tags });
    alert('Nota criada com sucesso.');

    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Links úteis">
            {links.map((link, i) => (
              <NoteItem
                key={String(i)}
                value={link}
                readOnly
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleLinkAddition}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, i) => (
                <NoteItem
                  key={String(i)}
                  value={tag}
                  readOnly
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleTagAddition}
              />
            </div>
          </Section>
          <Button text="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
