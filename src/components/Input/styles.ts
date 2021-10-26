import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--input-background);
  padding: 1.6rem;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  svg {
    color: var(--gray-100);
  }

  input {
    width: 100%;
    color: var(--gray-300);
    background-color: var(--input-background);
    border: 0;

    &::placeholder {
      color: var(--gray-300);
    }
  }
`;
