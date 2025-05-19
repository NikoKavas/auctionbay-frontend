import React from 'react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { InputField } from '../Form/InputField'
import { useLogin } from '../../hooks/useLogin'
import logoImg from '../../assets/logo.png'
import gridImage from '../../assets/registerframe.png'

import {
  PageWrapper, LeftGrid, RightGrid, Image, Card, CardInner,
  Logo, FormSection, TitleBlock, Title, Subtitle,
  FullWidthButton, Footer, StyledLink, ServerError,
  ForgotPasswordWrapper,
    StyledForgotPassword
} from '../Form/FormLayout'

const LoginForm: FC = () => {
  const { control, onSubmit, errors, loading, error } = useLogin()

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
                <Title>Welcome back!</Title>
                <Subtitle>Please enter your details</Subtitle>
              </TitleBlock>

              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <InputField label="E-mail" placeholder="E-mail" {...field} error={errors.email?.message} />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <InputField label="Password" type="password" placeholder="Password" {...field} error={errors.password?.message} />
                )}
              />

                <ForgotPasswordWrapper>
                    <StyledForgotPassword to="/forgot-password">Forgot password?</StyledForgotPassword>
                </ForgotPasswordWrapper>

              <FullWidthButton type="submit" variant="primary">
                {loading ? 'Logging in...' : 'Login'}
              </FullWidthButton>

              {error && <ServerError>{error}</ServerError>}
            </FormSection>

            <Footer>
              <span>Don't have an account?</span>
              <StyledLink to="/signup">Sign up</StyledLink>
            </Footer>
          </CardInner>
        </Card>
      </RightGrid>
    </PageWrapper>
  )
}

export default LoginForm
