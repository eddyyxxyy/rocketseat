import { styled } from 'styled-components';

export const Container = styled.button`
  background: none;
  font-size: 1.6rem;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  border: none;
`;
