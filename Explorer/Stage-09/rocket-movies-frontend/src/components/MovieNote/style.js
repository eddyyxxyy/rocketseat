import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  padding: 3.2rem;

  border-radius: 1.6rem;

  .job-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: justify;
    text-overflow: ellipsis;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 1.4rem 0;
  }

  .tags {
    margin-top: 1rem;
  }
`;
