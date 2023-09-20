import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 4.8rem 12.4rem;
  }

  h1 {
    font-weight: 400;
    font-size: 3.2rem;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    display: block;

    > button {
      padding: 0 3.2rem;
    }
  }
`;
