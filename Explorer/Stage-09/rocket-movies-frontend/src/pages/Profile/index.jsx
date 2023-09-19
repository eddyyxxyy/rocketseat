import { AvatarWrapper, Container, Fields, Form } from './style';
import { TextButton } from '../../components/TextButton';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <header>
        <TextButton icon={FiArrowLeft} text="Go back" to="/" $isactive />
      </header>
      <main>
        <Form>
          <AvatarWrapper>
            <img src="https://github.com/eddyyxxyy.png" alt="Profile picture" />
            <TextButton icon={FiCamera} title="Change profile picture" />
          </AvatarWrapper>
          <Fields>
            <Input
              icon={FiUser}
              type="text"
              defaultValue="Edson Pimenta"
              placeholder="Name"
              autoFocus
            />
            <Input
              icon={FiMail}
              type="email"
              defaultValue="dev.eddyyxxyy@gmail.com"
              placeholder="E-mail"
            />
            <Input icon={FiLock} type="password" placeholder="New password" />
            <Input icon={FiLock} type="password" placeholder="Old password" />
          </Fields>
          <Button type="button" title="Update my credentials" text="Save" />
        </Form>
      </main>
    </Container>
  );
}
