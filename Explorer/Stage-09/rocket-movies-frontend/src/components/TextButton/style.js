import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background: none;

  font-size: 1.6rem;
  color: ${({ $isactive, theme }) =>
    $isactive ? theme.COLORS.PINK_200 : theme.COLORS.GRAY_200};
`;
