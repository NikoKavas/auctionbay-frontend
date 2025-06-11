// src/components/Profile/EmptyState.tsx
import styled from 'styled-components'

const Box = styled.div`
  grid-column: 1 / -1;
  max width: 331px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 100px 0;
  margin: 24px auto 0;
`
const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #071015;
  white-space: nowrap;
`
const Sub = styled.p`
  margin: 0;
  max-width: 600px;
  line-height: 24px; 
  font-size: 16px;
  color: #74817F;
  font-weight: 300;
  text-align: center;
`

interface Props { title: string; subtitle: string }

export const EmptyState: React.FC<Props> = ({ title, subtitle }) => (
  <Box>
    <Title>{title}</Title>
    <Sub>{subtitle}</Sub>
  </Box>
)
