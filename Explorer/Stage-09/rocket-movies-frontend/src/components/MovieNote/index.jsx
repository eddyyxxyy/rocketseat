import { Container } from './style.js';
import { NoteHeader } from '../NoteHeader/index.jsx';
import { Tag } from '../Tag/index.jsx';
import { Tags } from '../Tags/index.jsx';

export function MovieNote({ title, rating, description, tags }) {
  return (
    <Container>
      <NoteHeader heading={title} rating={rating} />
      <div>
        <p className="job-title">{description}</p>
      </div>
      <Tags>
        {tags.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </Tags>
    </Container>
  );
}
