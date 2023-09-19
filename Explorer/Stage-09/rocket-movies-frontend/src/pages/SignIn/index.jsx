import { BackgroundImg, Container, Form } from './style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { FiLock, FiMail } from 'react-icons/fi';

export function SignIn() {
  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Application to track everything you watch.</p>
          <h2>Enter your credentials</h2>
        </header>
        <Input icon={FiMail} placeholder="E-mail" autoFocus />
        <Input icon={FiLock} placeholder="Password" />
        <Button text="Sign in" type="button" />
        <TextButton text="Sign up" to="/register" isActive="true" />
      </Form>
      <BackgroundImg />
    </Container>
  );
}
