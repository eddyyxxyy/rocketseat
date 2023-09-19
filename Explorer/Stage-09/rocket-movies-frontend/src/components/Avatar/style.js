import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextButton } from '../TextButton';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > div {
    text-align: right;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  a {
    justify-content: end;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const AvatarImgWrapper = styled.div`
  height: 6.4rem;
  width: 6.4rem;

  > img {
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 50%;
  }
`;
