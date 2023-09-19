import styled from 'styled-components';
import backgroundImg from '../../assets/movie-theater.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  height: 100%;
  max-width: 64rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 14rem;

  h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK_200};
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    margin: 5rem 0;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
