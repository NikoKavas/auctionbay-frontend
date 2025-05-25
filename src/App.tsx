import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes as Routes } from './routes/Routes'
import { fetchUser } from './services/user'
import authStore from './stores/auth.store'

export default function App() {
  useEffect(() => {
    fetchUser()
      .then((me) => authStore.login(me))
      .catch(() => authStore.signout())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}