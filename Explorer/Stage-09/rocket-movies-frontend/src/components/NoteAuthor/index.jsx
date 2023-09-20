import { Container, Avatar, CreatedAt } from './style';
import { FiClock } from 'react-icons/fi';

export function NoteAuthor({ avatarImgSrc, name, createdAt, ...rest }) {
  return (
    <Container {...rest}>
      <Avatar to="/profile">
        <div>
          <img src={avatarImgSrc} alt="Profile picture" />
        </div>
        <p>{name}</p>
      </Avatar>
      <CreatedAt>
        <FiClock />
        <p>{createdAt}</p>
      </CreatedAt>
    </Container>
  );
}
