import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  )
}