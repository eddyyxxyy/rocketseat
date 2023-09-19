import styled from 'styled-components';
import { Input } from '../Input';

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 2.4rem 12.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_500};

  > div {
    margin-bottom: 0;
  }

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK_200};
  }
`;
