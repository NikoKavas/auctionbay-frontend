// src/pages/RegisterPage.tsx
import React from 'react'
import styled from 'styled-components'
import { InputField } from '../components/Form/InputField'
import { Button } from '../components/Button'
import sampleImage from '../assets/registerframe.png'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Left = styled.div`
  flex: 1;
  background: url(${sampleImage}) center/cover no-repeat;
`

const Right = styled.div`
  flex: 0 0 400px; /* prilagodi po Figma: to je širina form-e */
  background: ${({ theme }) => theme.colors.white};
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

const Logo = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 32px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  /* tukaj lahko vstavimo tvoj SVG kot background-image,  
     ali pa <img> komponento, kot rabiš */
`

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.h2};
  font-weight: 700;
`

const Subtitle = styled.p`
  margin: 8px 0 32px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.7;
`

const FieldRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`

const FullWidth = styled.div`
  width: 100%;
  margin-bottom: 24px;
`

const FooterText = styled.p`
  text-align: center;
  margin-top: 32px;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};
  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`

export default function RegisterPage() {
  return (
    <Container>
      <Left />

      <Right>
        <Logo />
        <Title>Hello!</Title>
        <Subtitle>Please enter your details</Subtitle>

        <FieldRow>
          <InputField label="Name" placeholder="Placeholder" />
          <InputField label="Surname" placeholder="Placeholder" />
        </FieldRow>

        <FullWidth>
          <InputField label="E-mail" placeholder="Placeholder" />
        </FullWidth>

        <FullWidth>
          <InputField
            label="Password"
            type="password"
            placeholder="Placeholder"
          />
        </FullWidth>

        <FullWidth>
          <InputField
            label="Repeat password"
            type="password"
            placeholder="Placeholder"
          />
        </FullWidth>

        <Button variant="primary">Sign up</Button>

        <FooterText>
          Already have an account? <a href="/login">Log in</a>
        </FooterText>
      </Right>
    </Container>
  )
}
