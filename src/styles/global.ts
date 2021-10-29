import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'SFProDisplay400';
    src: url('/fonts/SFPRODISPLAYREGULAR.woff');
  }

  @font-face {
    font-family: 'SFProDisplay500';
    src: url('/fonts/SFPRODISPLAYMEDIUM.woff');
  }

  @font-face {
    font-family: 'SFProDisplay700';
    src: url('/fonts/SFPRODISPLAYBOLD.woff');
  }

  :root {
    font-size: 62.5%;
    --input-background: #FDFCFC;
    --background: #fefaf6;
    --gray-100: #DCD8D8;
    --gray-200: #BFBEBF;
    --gray-300: #6A6767;
    --gray-400: #54565A;
    --gray-500: #3F4043;
    --red: #FF6978;
    --green: #EEF5DB;
    --blue-100: #4ABDF1;
    --blue-200: #00173D;
    --yellow: #FFF6E5;
    --white: #ffffff;
    --black-100: #313131;
    --black-200: #3F4043;
    --purple: #451475;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  html,
  body,
  input,
  textarea,
  button {
    font-family: 'SFProDisplay400', sans-serif;
    font-size: 1.6rem;
    color: var(--black-200);
  }

  body {
    --webkit-font-smoothing: antialiased;
    background-color: var(--background);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    scrollbar-width: 3px;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
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
