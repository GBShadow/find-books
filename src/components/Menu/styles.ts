import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    background-color: #fff;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);

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
  }
`;
