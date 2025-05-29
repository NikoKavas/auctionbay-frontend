// src/components/Tags/Tag.tsx
import React from 'react'
import styled, { css } from 'styled-components'

export type TagVariant = 'outbid' | 'winning' | 'inprogress' | 'done'

interface Props {
  variant: TagVariant
  children: string
}

const VARIANT_STYLES: Record<TagVariant, { bg: string; color: string }> = {
  outbid:     { bg: '#FFAA98', color: '#071015' },
  winning:    { bg: '#ADFF90', color: '#071015' },
  inprogress: { bg: '#F9FF90', color: '#071015' },
  done:       { bg: '#272D2D', color: '#FFFFFF' },
}

const StyledTag = styled.span<{ variant: TagVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* padding = 2px vertikalno, 4px horizontalno */
  padding: 2px 4px;
  font-size: 10px;
  font-weight: 300;
  border-radius: 8px;
  line-height: 1;

  ${({ variant }) => {
    const { bg, color } = VARIANT_STYLES[variant]
    return css`
      background: ${bg};
      color: ${color};
    `
  }}
`

export const Tag: React.FC<Props> = ({ variant, children }) => (
  <StyledTag variant={variant}>{children}</StyledTag>
)
