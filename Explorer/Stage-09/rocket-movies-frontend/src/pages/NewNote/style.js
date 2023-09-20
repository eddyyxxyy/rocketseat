import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;

    padding: 4.8rem 12.4rem;
  }
`;
