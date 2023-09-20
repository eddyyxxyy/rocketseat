import { Container, Form } from './style';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextButton } from '../../components/TextButton';
import { FiArrowLeft } from 'react-icons/fi';
import { TextArea } from '../../components/TextArea';
import { NewTag } from '../../components/NewTag';

export function NewNote() {
  return (
    <Container>
      <Header />
      <main>
        <TextButton icon={FiArrowLeft} text="Go back" to="/" />
        <h1>New movie note</h1>
        <Form>
          <div className="info">
            <Input placeholder="Title" />
            <Input placeholder="Rating (0 to 5)" min={0} max={5} />
          </div>
          <TextArea placeholder="Observations" />
          <div className="new-tags">
            <h2>Tags</h2>
            <NewTag isNew={false} text="React" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
