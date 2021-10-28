import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  padding: 0.8rem;
  margin-top: 1.6rem;
  color: var(--blue-100);
  background-color: transparent;
  border: 0;
  transition: all 0.4s;

  &:active {
    opacity: 0.3;
  }

  &:hover {
    color: ${darken(0.2, `#4ABDF1`)};
  }
`;
