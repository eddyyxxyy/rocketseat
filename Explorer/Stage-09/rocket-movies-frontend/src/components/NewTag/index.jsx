import { Container } from './style';
import { FiPlus, FiX } from 'react-icons/fi';

export function NewTag({ isNew = true, text, onCLick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={text || ''} readOnly={!isNew} {...rest} />
      <button
        type="button"
        onClick={onCLick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus size={20} /> : <FiX size={20} />}
      </button>
    </Container>
  );
}
