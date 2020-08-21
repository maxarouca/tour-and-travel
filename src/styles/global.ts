import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h5{
    font-family: 'Playfair Display', serif;

  }

  a{
    cursor: pointer;
  }

  section {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;

  }
`

export default GlobalStyles
