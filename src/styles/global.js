import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root{
    --textColor: #212529;
    --backgroundColor:#faf9f9;
    --primaryColor: #1d3557;

    --white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    background: var(--backgroundColor);
    color: var(--textColor);

    height: 100vh;
  }

`
