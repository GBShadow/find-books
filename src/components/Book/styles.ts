import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  padding-top: 4rem;

  strong {
    grid-column: 2;
    justify-self: center;
    align-self: center;
  }
`;

export const Book = styled.a`
  div {
    width: 100px;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-100);
    gap: 1.6rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

    img {
      width: 100px;
      height: 150px;
    }
  }

  strong {
    display: block;
  }
`;

export const Title = styled.strong`
  margin-top: 0.9rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Author = styled.strong`
  font-size: 1rem;
  font-weight: 900;
  margin-top: 0.5rem;
`;
