// src/components/Tags/TimeTag.tsx
import React from 'react'
import styled, { css } from 'styled-components'
import { getRemainingHours } from '../../utils/time'

interface Props {
  endTime: string | number
}

const Tag = styled.div<{ hot: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 4px;
  gap: 4px;
  border-radius: 8px;
  font-size: 10px;
  line-height: 12px;
  background: ${({ hot }) => (hot ? '#FFAA98' : 'transparent')};
  color: ${({ hot }) => (hot ? '#071015' : '#071015')};
`

export const TimeTag: React.FC<Props> = ({ endTime }) => {
  const hours = getRemainingHours(endTime)
  const hot = hours <= 24 && hours > 0

  return (
    <Tag hot={hot}>
      {hours}h
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.12 3.875C7.535 3.29 6.77 2.99499 6 2.99499V5.995L3.88 8.115C5.05 9.285 6.95 9.285 8.125 8.115C9.295 6.94499 9.295 5.045 8.12 3.875ZM6 0.994995C3.24 0.994995 1 3.235 1 5.995C1 8.755 3.24 10.995 6 10.995C8.76 10.995 11 8.755 11 5.995C11 3.235 8.76 0.994995 6 0.994995ZM6 9.995C3.79 9.995 2 8.205 2 5.995C2 3.785 3.79 1.995 6 1.995C8.21 1.995 10 3.785 10 5.995C10 8.205 8.21 9.995 6 9.995Z"
          fill={hot ? '#071015' : '#071015'}
        />
      </svg>
    </Tag>
  )
}