// src/components/Button.tsx
import styled, { css } from 'styled-components'
import { theme } from '../styles/theme'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = styled.button<ButtonProps>`
  height: 40px;
  padding: 8px 16px;
  border-radius: 16px;
  font-family: ${theme.font.family};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  
  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? css`
          background: ${theme.colors.primary};       /* #F2FF47 */
          color: ${theme.colors.secondary};          /* #161817 */
        `
    : variant === 'secondary'
      ? css`
          background: ${theme.colors.secondary};     /* #161817 */
          color: ${theme.colors.white};              /* #FFFFFF */
        `
      : css`
          background: transparent;
          color: ${theme.colors.secondary};
          border: 2px solid ${theme.colors.secondary};
        `}
`
