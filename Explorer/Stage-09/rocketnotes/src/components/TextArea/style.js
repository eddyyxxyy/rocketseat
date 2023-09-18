import { styled } from 'styled-components';

export const Container = styled.textarea`
  resize: none;

  width: 100%;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 1.6rem;

  border: none;
  border-radius: 1rem;

  margin-bottom: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
