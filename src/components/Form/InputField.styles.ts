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

  border: 1px solid ${theme.colors.lightGray};
  border-radius: 16px;
  background: ${theme.colors.white};

  /* Hover */
  &:hover {
    border-color: ${theme.colors.gray};
  }

  /* Focused / Active */
  ${p =>
    p.focused &&
    css`
      border-color: ${theme.colors.primary};
    `}

  /* Filled but not focused: keep default border (lightGray) */
  ${p =>
    p.filled &&
    !p.focused &&
    css`
      /* no extra styling, but could e.g. change label color */
    `}
`

export const StyledLabel = styled.label`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.body};
  font-weight: 300;
  line-height: 24px;
  color: ${theme.colors.secondary};
`

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.body};
  font-weight: 300;
  line-height: 24px;
  color: ${theme.colors.secondary};

  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${theme.colors.gray};
  }
`
