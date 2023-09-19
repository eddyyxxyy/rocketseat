import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: none;

  font-size: 1.6rem;
  color: ${({ $isactive, theme }) =>
    $isactive ? theme.COLORS.PINK_200 : theme.COLORS.GRAY_200};
`;
