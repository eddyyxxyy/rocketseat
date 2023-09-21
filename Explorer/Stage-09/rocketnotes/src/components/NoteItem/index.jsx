import { Container } from './style';
import { FiPlus, FiX } from 'react-icons/fi';

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew ? 'true' : 'false'}>
      {isNew ? (
        <input type="text" value={value || ''} {...rest} />
      ) : (
        <input type="text" value={value || ''} readOnly {...rest} />
      )}
      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
