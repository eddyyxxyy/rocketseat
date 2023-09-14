import { BackgroundImg, Container, Form } from './style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

export function SignUp() {
  return (
    <Container>
      <BackgroundImg />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button text="Cadastrar" />
        <a href="#">Voltar para o login</a>
      </Form>
    </Container>
  );
}
