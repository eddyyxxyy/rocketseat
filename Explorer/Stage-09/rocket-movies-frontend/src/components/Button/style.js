import styled from 'styled-components';

export const Container = styled.button`
  height: 5.6rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_200};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  border: none;
  border-radius: 1rem;
`;
