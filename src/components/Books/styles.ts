import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  padding-top: 4rem;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: flex-start;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  grid-column: 2;
  justify-self: center;
  align-self: center;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
