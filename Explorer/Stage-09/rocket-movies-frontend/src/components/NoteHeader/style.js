import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  ${({ $indetail }) =>
    !$indetail
      ? 'flex-direction: column; \
          gap: .8rem; '
      : 'flex-direction: row; \
          gap: 2rem; \
          align-items: center;'};

  > h3 {
    font-size: ${({ $indetail }) => (!$indetail ? '2.4rem' : '3.6rem')};
  }
`;

export const Rating = styled.div`
  display: flex;
  ${({ $indetail }) => (!$indetail ? 'gap: 1rem; ' : 'gap: 0.6rem;')};

  > svg {
    fill: ${({ theme }) => theme.COLORS.PINK_200};
  }
`;
