// src/components/Form/InputField.tsx
import React, { type InputHTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { FieldWrapper, StyledInput, StyledLabel, TogglePasswordIcon } from './InputField.styles'
import eyeIcon from '../../assets/eye.png'


interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputField: React.FC<InputFieldProps> = ({ label, type, ...props }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const filled = value.trim().length > 0
  const isPassword = type === 'password'

  return (
    <FieldWrapper focused={focused} filled={filled}>
      <StyledLabel>{label}</StyledLabel>
      <div style={{ position: 'relative', width: '100%' }}>
        <StyledInput
          {...props}
          type={isPassword && !showPassword ? 'password' : 'text'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {isPassword && (
          <TogglePasswordIcon
            src={eyeIcon}
            alt="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </FieldWrapper>
  )
}
