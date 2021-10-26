import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;

  a {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    color: var(--gray-200);

    &.active {
      color: var(--black-100);
    }
  }
`;
