import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  text-align: center;

  padding-top: 6.4rem;
`;

export const Search = styled.div`
  grid-area: search;

  padding: 4.2rem 4.2rem 0;
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 4.2rem;

  overflow-y: auto;
`;

export const NewNote = styled.button`
  grid-area: newnote;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 2rem;
`;
