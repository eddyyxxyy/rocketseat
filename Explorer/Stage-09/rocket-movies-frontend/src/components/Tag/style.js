import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: ${({ theme, $indetailview }) =>
    $indetailview ? theme.COLORS.BACKGROUND_50 : theme.COLORS.GRAY_400};

  color: ${({ theme }) => theme.COLORS.WHITE_100};

  padding: 0.8rem 1.6rem;

  border: none;
  border-radius: 0.8rem;
`;
