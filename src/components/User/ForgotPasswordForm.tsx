import React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.png'
import gridImage from '../../assets/registerframe.png'
import { InputField } from '../Form/InputField'
import { Button } from '../Button'
import BackIcon from '../../assets/BackIcon.png'

import {
  PageWrapper, LeftGrid, RightGrid, Image, Card, CardInner,
  Logo, FormSection, TitleBlock, Title, Subtitle,
  FullWidthButton, Footer, StyledLink,
  BackToLogin
} from '../Form/FormLayout'

const ForgotPasswordForm: FC = () => {
  return (
    <PageWrapper>
      <LeftGrid>
        <Image src={gridImage} alt="Product grid" />
      </LeftGrid>

      <RightGrid>
        <Card>
          <CardInner>
            <Logo src={logoImg} alt="AuctionBay logo" />

            <FormSection>
              <TitleBlock>
                <Title>Forgot password?</Title>
                <Subtitle>No worries, we will send you reset instructions</Subtitle>
              </TitleBlock>

              <InputField
                label="E-mail"
                placeholder="Enter your email"
              />

              <FullWidthButton type="button" variant="primary">
                Reset password
              </FullWidthButton>
              <BackToLogin to="/login">
                <img src={BackIcon} alt="Back" width="16" height="16" />
                Back to login
                </BackToLogin>
            </FormSection>

            <Footer>
              
            </Footer>
          </CardInner>
        </Card>
      </RightGrid>
    </PageWrapper>
  )
}

export default ForgotPasswordForm
