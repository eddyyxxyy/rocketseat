import styled from 'styled-components';

export const Container = styled.article`
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding: 4rem 12.4rem;
    overflow-y: auto;

    div:nth-child(3) {
      margin-bottom: 2.4rem;
    }
  }

  a {
    justify-content: flex-start;
  }
`;

export const NoteContent = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  margin-top: 2.4rem;

  > p {
    text-align: justify;
    margin-bottom: 2rem;
  }
`;
