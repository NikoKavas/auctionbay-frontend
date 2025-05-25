// src/pages/RegisterPage.tsx
import React, { useEffect } from 'react'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import gridImage from '../../assets/registerframe.png'
import { InputField } from '../Form/InputField'
import { Button } from '../Button'
import logoImg from '../../assets/logo.png'
import {
  PageWrapper, LeftGrid, RightGrid, Image, Card, CardInner,
  Logo, FormSection, TitleBlock, Title, Subtitle,
  NameRow, FullWidthButton, Footer, StyledLink, ServerError
} from '../Form/FormLayout'
import { useRegister } from '../../hooks/useRegister'
import { Controller } from 'react-hook-form'

const RegisterForm: FC = () => {
  const { control, onSubmit, errors, loading, error, user } = useRegister()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/profile', { replace: true})
    }
  }, [user, navigate])

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
                    <InputField label="Name" placeholder="Name" {...field} 
                    error={errors.first_name?.message}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="last_name"
                  render={({ field }) => (
                    <InputField label="Surname" placeholder="Surname" {...field}
                    error={errors.last_name?.message}
                    />
                  )}
                />
              </NameRow>

              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <InputField label="E-mail" 
                  placeholder="E-mail" 
                  {...field} 
                  error={errors.email?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <InputField label="Password" 
                  type="password" 
                  placeholder="Password" 
                  {...field} 
                  error={errors.password?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="confirm_password"
                render={({ field }) => (
                  <InputField 
                  label="Repeat password" 
                  type="password" 
                  placeholder="Repeat password" 
                  {...field} 
                  error={errors.confirm_password?.message}
                  />
                )}
              />

              <FullWidthButton type="submit" variant="primary">
                {loading ? 'Signing up...' : 'Sign up'}
              </FullWidthButton>
              {error && <ServerError>{error}</ServerError>}
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


