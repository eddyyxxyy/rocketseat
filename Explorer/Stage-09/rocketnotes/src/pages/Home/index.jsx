import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function handleSelectTag(tagName) {
    if (tagName === 'all') {
      return setSelectedTags([]);
    }

    const alreadySelected = selectedTags.includes(tagName);

    if (alreadySelected) {
      const filteredTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectedTags}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <TextButton
            title="Todos"
            onClick={() => handleSelectTag('all')}
            isActive={selectedTags.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <TextButton
                title={tag.name}
                onClick={() => handleSelectTag(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>
      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Section title="Minhas notas">
          {notes &&
            notes.map((note) => (
              <Note
                key={note.id}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))}
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
