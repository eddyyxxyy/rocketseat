import { BackgroundImg, Container, Form } from './style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

export function SignUp() {
  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Application to track everything you watch.</p>
          <h2>Create your account</h2>
        </header>
        <Input icon={FiUser} placeholder="Name" autoFocus />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Password" />
        <Button text="Sign up" type="button" />
        <TextButton
          icon={FiArrowLeft}
          text="Go back to sign in"
          to="/"
          isActive="true"
        />
      </Form>
      <BackgroundImg />
    </Container>
  );
}
