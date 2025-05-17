// src/pages/RegisterPage.tsx
import React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import gridImage from '../../assets/registerframe.png'
import { InputField } from '../Form/InputField'
import { Button } from '../Button'
import logoImg from '../../assets/logo.png'
import { useRegister } from '../../hooks/useRegister'
import { Controller } from 'react-hook-form'

const RegisterForm: FC = () => {
  const { control, onSubmit, errors, loading, error } = useRegister()

  return (
    <PageWrapper>
      <LeftGrid>
        <Image src={gridImage} alt="Product grid" />
      </LeftGrid>

      <RightGrid>
        <Card>
          <CardInner>
            <Logo src={logoImg} alt="AuctionBay logo" />

            <FormSection onSubmit={onSubmit}>
              <TitleBlock>
                <Title>Hello!</Title>
                <Subtitle>Please enter your details</Subtitle>
              </TitleBlock>

              <NameRow>
                <Controller
                  control={control}
                  name="first_name"
                  render={({ field }) => (
                    <InputField label="Name" placeholder="Name" {...field} />
                  )}
                />
                <Controller
                  control={control}
                  name="last_name"
                  render={({ field }) => (
                    <InputField label="Surname" placeholder="Surname" {...field} />
                  )}
                />
              </NameRow>

              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <InputField label="E-mail" placeholder="E-mail" {...field} />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <InputField label="Password" type="password" placeholder="Password" {...field} />
                )}
              />

              <Controller
                control={control}
                name="confirm_password"
                render={({ field }) => (
                  <InputField label="Repeat password" type="password" placeholder="Repeat password" {...field} />
                )}
              />

              <FullWidthButton type="submit" variant="primary">
                {loading ? 'Signing up...' : 'Sign up'}
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

export default RegisterForm


const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  background: #F6F6F4;
  overflow: hidden;
`

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
  height: 1008px; 
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

const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 64px;
  object-fit: cover;
`

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 384px;
  margin: 0 auto; 
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
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
  margin-bottom: 64px;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`

const StyledLink = styled(Link)``

