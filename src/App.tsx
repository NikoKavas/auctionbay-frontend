import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes as Routes } from './routes/Routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

    </ThemeProvider>
  )
}