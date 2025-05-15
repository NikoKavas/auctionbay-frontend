import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
html, body, #root {
  width: 100%;
  margin: 0;
}
  
body {
    min-height: 100vh;
    margin: 0;
    font-family: ${theme.font.family};
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
  }
`