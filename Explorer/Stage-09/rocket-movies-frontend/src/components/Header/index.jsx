import { Container } from './style';
import { Input } from '../Input';
import { Avatar } from '../Avatar';

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Find movies by title" />
      <Avatar />
    </Container>
  );
}
