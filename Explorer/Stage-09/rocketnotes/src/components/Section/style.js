import { styled } from 'styled-components';

export const Container = styled.section`
  margin: 5.6rem 0 2.8rem;

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding-bottom: 1.6rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    margin-bottom: 2.4rem;
  }
`;
