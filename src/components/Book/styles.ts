import styled from 'styled-components';

export const Book = styled.a`
  max-width: 100px;
  justify-self: center;

  @media screen and (min-width: 900px) {
    max-width: 160px;
  }

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

    @media screen and (min-width: 900px) {
      width: 160px;
      height: 230px;
    }

    img {
      width: 100%;
      height: 100%;
    }
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
  display: block;
`;
