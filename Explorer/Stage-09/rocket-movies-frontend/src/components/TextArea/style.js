import styled from 'styled-components';

export const Container = styled.div`
  height: 28rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  border-radius: 1rem;

  margin-bottom: 0.8rem;

  > textarea {
    width: 100%;
    height: 28rem;

    padding: 1.6rem 1.8rem;
    resize: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    border: none;
  }
`;
