import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { theme } from '../styles/theme'   // <-- uvozi theme

const Section = styled.section`
  width: 100%;               
  min-height: calc(100vh - 72px); 
  text-align: center;
  padding: 64px 32px;         
  background: ${theme.colors.white};
`

const Title = styled.h1`
  font-size: ${theme.font.sizes.h1};
  color: ${theme.colors.secondary};
  margin: 0;
`

const Subtitle = styled.p`
  font-size: ${theme.font.sizes.body};
  color: ${theme.colors.secondary};
  opacity: 0.7;
  margin: 16px 0;
`

export const Hero: React.FC = () => (
  <Section>
    <Title>E-auctions made easy!</Title>
    <Subtitle>
      Simple way for selling your unused products, or getting a deal on product you want!
    </Subtitle>
    <Button variant="primary">Start bidding</Button>
  </Section>
)
