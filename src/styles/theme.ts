import 'styled-components'

export const theme = {
  colors: {
    primary:   '#F4FF47',
    secondary: '#161817',
    gray:      '#B0BFBD',
    lightGray: '#DDE9E6',
    darkGray:  '#272D2D',
    white:     '#FFFFFF',
    background:'#F6F6F4',
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
      darkGray: string
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
