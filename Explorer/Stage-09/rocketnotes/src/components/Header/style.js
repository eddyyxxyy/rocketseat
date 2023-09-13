import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  grid-area: header;

  height: 10.5rem;
  width: 100%;

  padding: 0 4.5rem;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 5.6rem;
    border-radius: 50%;
  }

  > div {
    line-height: 2.4rem;

    span {
      display: block;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
