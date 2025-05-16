import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
html, body, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  font-family: ${theme.font.family};
  background:${theme.colors.background};      /* celotno ozadje */
  color: ${theme.colors.secondary};
 }
`

