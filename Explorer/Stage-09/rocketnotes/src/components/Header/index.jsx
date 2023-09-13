import { Container, Profile, Logout } from './style';
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/eddyyxxyy.png" alt="Foto de usuário" />
        <div>
          <span>Bem vindo,</span>
          <strong>Edson Pimenta</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
