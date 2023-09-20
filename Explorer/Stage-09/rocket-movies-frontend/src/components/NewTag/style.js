import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isnew }) =>
    isnew ? 'transparent' : theme.COLORS.BACKGROUND_100};

  color: ${({ theme }) => theme.COLORS.WHITE_300};

  padding-right: 1.6rem;

  border: ${({ theme, isnew }) =>
    isnew ? `.1rem dashed ${theme.COLORS.WHITE_300}` : 'none'};
  border-radius: 1rem;

  margin-bottom: 0.8rem;

  > button {
    background: none;
    border: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    width: 100%;
    height: 5.6rem;

    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    padding: 1.2rem;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
    }
  }
`;
