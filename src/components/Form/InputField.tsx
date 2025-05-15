// src/components/Form/InputField.tsx
import React, { type InputHTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { FieldWrapper, StyledInput, StyledLabel } from './InputField.styles'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [focused, setFocused] = useState(false)
  const filled = Boolean(props.value && props.value.toString().length)

  return (
    <FieldWrapper focused={focused} filled={filled}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </FieldWrapper>
  )
}
