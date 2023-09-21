import { BackgroundImg, Container, Form } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useState } from 'react';
import { api } from '../../services/api';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        navigate('/');
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert('Não foi possível cadastrar.');
        }
      });
  }

  return (
    <Container>
      <BackgroundImg />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
