import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #000C12;
    color: #fff;
    --webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  main {
    /* margin: 32px 122px 0 249px; */
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;