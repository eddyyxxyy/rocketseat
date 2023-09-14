import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 0 12.4rem;

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;

  margin: -9.4rem auto;

  > div:nth-of-type(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;

  height: 18.6rem;
  width: 18.6rem;

  margin: 0 auto 6.4rem;

  > img {
    width: 100%;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
