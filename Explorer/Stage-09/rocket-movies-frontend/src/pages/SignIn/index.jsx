import { BackgroundImg, Container, Form } from './style';
import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Application to track everything you watch.</p>
          <h2>Log in</h2>
        </header>
        <Input />
        <Input />
        {/* <Button />
        <TextButton /> */}
      </Form>
      <BackgroundImg />
    </Container>
  );
}
