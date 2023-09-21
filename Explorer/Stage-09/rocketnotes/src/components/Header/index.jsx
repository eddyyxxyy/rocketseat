import { Container, Profile, Logout } from './style';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/eddyyxxyy.png" alt="Foto de usuário" />
        <div>
          <span>Bem vindo,</span>
          <strong>Edson Pimenta</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
