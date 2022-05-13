import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #1DB954;
    --white: #FFF;
    --white-light: #F1F1F1;
    --transparent: rgba(255, 255, 255, 0.1);
    --gray:#2D2E30;
    --gray-light: #B3B3B3;
    --gray-dark: #121212;
    --black: #000;
    --black-base: #121212;
    --black-light: #1B1B1B;
    
    /* --scrollbar-vertical-size: 16px;
    --scrollbar-horizontal-size: 16px; */
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
   body {
     font-family: 'Rubik', sans-serif;
     font-style: normal;
     background: var(--black-light);
     color: var(--white-light);
  }  
  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,.3);
  }

`;

export default GlobalStyle;
