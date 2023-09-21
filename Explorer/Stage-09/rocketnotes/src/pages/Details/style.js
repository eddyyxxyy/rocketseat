import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: 10.5rem auto;

  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 6.4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-of-type {
    text-align: right;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 6.4rem;
  }

  > p {
    text-align: justify;
    margin-top: 1.6rem;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
