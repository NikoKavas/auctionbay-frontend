import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

interface WrapperProps {
  focused: boolean
  filled: boolean
}

export const FieldWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  
`

export const StyledLabel = styled.label`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.body};
  font-weight: 300;
  line-height: 24px;
  color: ${theme.colors.secondary};
`
  interface InputProps {
    filled: boolean
  }


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const StyledInput = styled.input.attrs({})<InputProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.body};
  font-weight: 300;
  line-height: 24px;
  color: ${theme.colors.secondary};

  background: ${theme.colors.white};
  border: 1px solid ${({ error }) => error ? 'red' : theme.colors.lightGray};  border-radius: 16px;
  outline: none;

  &:hover {
    border-color: ${({ error }) => error ? 'red' : theme.colors.gray};
  }

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }
   
  &.filled {
    font-weight: 500;
  }
`
export const TogglePasswordIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 20px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
  }
`