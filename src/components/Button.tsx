// src/components/Button.tsx
import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'alternative'
export interface ButtonProps {
  variant?: ButtonVariant
}

// skupne nastavitve za vse variante in stanja
const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: background 0.1s ease, border-color 0.1s ease;
`

export const Button = styled.button<ButtonProps>`
  ${base}

  /* PRIMARY */
  ${({ variant = 'primary' }) =>
    variant === 'primary' &&
    css`
      background: #F4FF47;
      color: #071015;
      border: none;

      &:hover {
        background: #D0DB33;
      }
      &:active {
        background: #ACB723;
      }
    `}

  /* SECONDARY */
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background: #272D2D;
      color: #FFFFFF;
      border: none;

      &:hover {
        background: #1C2526;
      }
      &:active {
        background: #131E20;
      }
    `}

  /* TERTIARY (ghost) */
  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      background: transparent;
      color: #272D2D;
      border: 1px solid #272D2D;

      &:hover {
        background: #1C2526;
        border-color: #1C2526;
        color: #FFFFFF;
      }
      &:active {
        background: #131E20;
        border-color: #131E20;
        color: #FFFFFF;
      }
    `}

  /* ALTERNATIVE (light) */
  ${({ variant }) =>
    variant === 'alternative' &&
    css`
      background: #EDF4F2;
      color: #071015;
      border: none;

      &:hover {
        background: #DDE9E6;
      }
      &:active {
        background: #B0BFBD;
      }
    `}
`
