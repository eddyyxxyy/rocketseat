import styled from 'styled-components';
import { TextButton } from '../../components/TextButton';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 14rem auto;
  grid-template-areas: 'header' 'content';

  > header {
    grid-area: header;

    display: flex;

    background-color: ${({ theme }) => theme.COLORS.PINK_100};

    padding: 2.4rem 12.4rem;
  }

  > main {
    grid-area: content;

    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 34rem;

  display: flex;
  flex-direction: column;
  place-items: center;

  > div:first-of-type {
    margin-bottom: 6.4rem;
  }

  > div:nth-child(3) {
    margin-bottom: 2.4rem;
  }
`;

export const Fields = styled.fieldset`
  width: 100%;

  border: none;

  margin-bottom: 1.6rem;

  > div:nth-child(2) {
    margin-bottom: 2.4rem;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  height: 18rem;
  width: 18rem;

  margin-top: -9rem;

  > img {
    width: 100%;
    border-radius: 50%;
  }

  > a {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.COLORS.PINK_200};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 1.4rem;
    border-radius: 50%;
  }
`;
