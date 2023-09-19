import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: clamp(40%, 1% + 2vw, 62.5%);
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.25s ease-in-out;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    filter: brightness(0.8);
  }
`;
