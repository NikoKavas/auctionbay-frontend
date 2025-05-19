import React, { type InputHTMLAttributes, useState } from 'react'
import { FieldWrapper, StyledInput, StyledLabel, TogglePasswordIcon } from './InputField.styles'
import eyeIcon from '../../assets/eye.png'
import { styled } from 'styled-components'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, error, ...props }) => {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const filled = Boolean(value && value.toString().length > 0)
  const isPassword = type === 'password'

  return (
    <FieldWrapper focused={focused} filled={filled}>
      <StyledLabel>{label}</StyledLabel>
      <div style={{ position: 'relative', width: '100%' }}>
        <StyledInput
          {...props}
          type={isPassword && !showPassword ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          filled={filled}
          error={error}
        />
        {isPassword && (
          <TogglePasswordIcon
            src={eyeIcon}
            alt="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
       {error && <ErrorText>{error}</ErrorText>}
    </FieldWrapper>
  )
}

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`