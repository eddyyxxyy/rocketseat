import { styled } from "styled-components";

export const Container = styled.button`
  height: 5.6rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  padding: 0 1.6rem;

  border: 0;
  border-radius: 1rem;

  margin-top: 1.6rem;

  &:disabled {
    opacity: 0.5;
  }
`;
