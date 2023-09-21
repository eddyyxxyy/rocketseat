import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.$isnew === 'true'
      ? 'transparent'
      : props.theme.COLORS.BACKGROUND_900};

  color: ${(props) => props.theme.COLORS.GRAY_300};

  padding-right: 1.6rem;

  border: ${(props) =>
    props.$isnew === 'true'
      ? `.1rem dashed ${props.theme.COLORS.GRAY_300}`
      : 'none'};
  border-radius: 1rem;

  margin-bottom: 0.8rem;

  > button {
    background: none;
    border: none;
  }

  .button-delete {
    color: ${(props) => props.theme.COLORS.RED};
  }

  .button-add {
    color: ${(props) => props.theme.COLORS.ORANGE};
  }

  > input {
    width: 100%;
    height: 5.6rem;

    background: transparent;

    color: ${(props) => props.theme.COLORS.WHITE};

    padding: 1.2rem;

    border: none;
    readonly: true;

    &::placeholder {
      color: ${(props) => props.theme.COLORS.GRAY_300};
    }
  }
`;
