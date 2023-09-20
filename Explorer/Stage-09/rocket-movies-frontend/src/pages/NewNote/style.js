import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;

    padding: 4.8rem 12.4rem;

    a {
      justify-content: left;
      margin-bottom: 2.4rem;

      color: ${({ theme }) => theme.COLORS.PINK_200};
    }
  }

  .info {
    display: flex;
    gap: 4rem;

    margin: 4rem 0;
  }

  .new-tags {
    margin-top: 4rem;
  }
`;

export const Form = styled.form``;
