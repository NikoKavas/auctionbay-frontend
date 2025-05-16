// src/pages/RegisterPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import gridImage from '../assets/registerframe.png'
import { InputField } from '../components/Form/InputField'
import { Button } from '../components/Button'

export default function RegisterPage() {
  return (
    <PageWrapper>
      <LeftGrid>
        <Image src={gridImage} alt="Product grid" />
      </LeftGrid>

      <RightGrid>
        <Card>
          <CardInner>
            <Logo>a</Logo>

            <FormSection>
              <Title>Hello!</Title>
              <Subtitle>Please enter your details</Subtitle>

              <NameRow>
                <InputField label="Name" placeholder="Placeholder" />
                <InputField label="Surname" placeholder="Placeholder" />
              </NameRow>

              <InputField label="E-mail" placeholder="Placeholder" />
              <InputField label="Password" type="password" placeholder="Placeholder" />
              <InputField label="Repeat password" type="password" placeholder="Placeholder" />

              <FullWidthButton variant="primary">
                Sign up
              </FullWidthButton>
            </FormSection>

            <Footer>
              <span>Already have an account?</span>
              <StyledLink to="/login">Log in</StyledLink>
            </Footer>
          </CardInner>
        </Card>
      </RightGrid>
    </PageWrapper>
  )
}

// 1) Zunanja mreža: 12 stolpcev, 100vh
const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  background: #F6F6F4;
`

// 2) Levi del: "span 8"
const LeftGrid = styled.div`
  grid-column: 1 / span 8;
  background: #F6F6F4;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// 3) Desni del: "span 4", centrirana kartica
const RightGrid = styled.div`
  grid-column: 9 / span 4;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: transparent; */ /* kartica bo bela, okolica pa #F6F6F4 */
`

const Card = styled.div`
  background: #FFFFFF;
  border-radius: 32px;
  width: 464px;
  height: 1008px; /* po Figma: 1024px minus robovi */
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 32px;
  height: 100%;
  width: 100%;
`

const Logo = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  background: #F4FF47;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #071015;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 384px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.h2};
  font-weight: 700;
  text-align: center;
`

const Subtitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  opacity: 0.7;
`

const NameRow = styled.div`
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
`

const FullWidthButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 16px;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`

const StyledLink = styled(Link)``

