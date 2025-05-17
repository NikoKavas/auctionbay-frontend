import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { theme } from '../../styles/theme'   

const Section = styled.section`
  text-align: center;
  padding: 64px 32px;         
  background: ${theme.colors.white};
`

const Title = styled.h1`
  font-size: ${theme.font.sizes.h1};
  color: ${theme.colors.secondary};
  font-weight: 700;
  Wdidth: 715px;          
  Height: 77px;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: ${theme.font.sizes.body};
  color: ${theme.colors.secondary};
  opacity: 0.7;
  font-weight: 300;
  max-width: 715px;
  margin: 16px auto;          
  line-height: 1.5; 
`

export const Hero: React.FC = () => (
  <Section>
    <Title>E-auctions made easy!</Title>
    <Subtitle>
      Simple way for selling your unused products, or <br />
      getting a deal on product you want!
    </Subtitle>
    <Button variant="primary">Start bidding</Button>
  </Section>
)
