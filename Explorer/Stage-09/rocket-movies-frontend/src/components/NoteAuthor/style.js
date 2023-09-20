import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Avatar = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > div {
    height: 1.6rem;
    width: 1.6rem;
  }

  img {
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 50%;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;

export const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_200};
  }
`;
