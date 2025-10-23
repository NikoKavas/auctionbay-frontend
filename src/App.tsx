import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes as Routes } from './routes/Routes'
import { fetchUser } from './services/user'
import authStore from './stores/auth.store'
import { Toaster } from 'react-hot-toast'

export default function App() {
  useEffect(() => {
    fetchUser()
      .then((me) => authStore.login(me))
      .catch(() => authStore.logout())
  }, [])
console.log(import.meta.env.VITE_API_URL);
  return (
    <ThemeProvider theme={theme}>
      <div>< Toaster/></div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}