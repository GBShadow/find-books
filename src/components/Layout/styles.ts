import styled, { keyframes } from 'styled-components';

const start = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem 7rem;
  max-width: 900px;
  margin: 0 auto;
  animation: ${start} 0.7s linear;

  a {
    width: 100%;
  }
`;
