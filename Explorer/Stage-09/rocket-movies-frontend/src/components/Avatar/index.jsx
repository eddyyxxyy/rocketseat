import { Link } from 'react-router-dom';
import { TextButton } from '../TextButton';
import { AvatarImgWrapper, Container } from './style';

export function Avatar() {
  return (
    <Container>
      <div>
        <Link to="/profile">
          <p>Edson Pimenta</p>
        </Link>
        <TextButton text="Log out" />
      </div>
      <Link to="/profile">
        <AvatarImgWrapper>
          <img src="https://github.com/eddyyxxyy.png" alt="Profile picture" />
        </AvatarImgWrapper>
      </Link>
    </Container>
  );
}
