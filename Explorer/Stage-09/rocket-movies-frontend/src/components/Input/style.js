import styled from 'styled-components';

export const Container = styled.div`
  height: 5.6rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  padding: 1.6rem 1.8rem;

  border-radius: 1rem;

  margin-bottom: 0.8rem;

  > input {
    width: 100%;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    border: none;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
