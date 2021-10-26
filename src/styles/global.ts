import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --input-background: #FDFCFC;
    --background: #fefaf6;
    --gray-100: #DCD8D8;
    --gray-200: #BFBEBF;
    --gray-300: #54565A;
    --gray-400: #3F4043;
    --red: #FF6978;
    --blue: #4ABDF1;
    --yellow: #FFF6E5;
    --black-100: #313131;
    --black-200: #3F4043;
    --white: #ffffff;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.6rem;
  }

  body {
    background-color: var(--background);
    width: 100vw;
    height: 100vh;
  }
  
  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }  
`;
