// src/styles/theme.ts
import 'styled-components'

export const theme = {
  colors: {
    primary:   '#F2FF47',
    secondary: '#161817',
    gray:      '#898B8A',
    lightGray: '#DDDCD7',
    white:     '#FFFFFF',
    background:'#F9FAFB',
  },
  font: {
    family: "'Inter', sans-serif",
    sizes: {
      h1: '3rem',
      h2: '2rem',
      body: '1rem',
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      gray: string
      lightGray: string
      white: string
      background: string
    }
    font: {
      family: string
      sizes: {
        h1: string
        h2: string
        body: string
      }
    }
  }
}
