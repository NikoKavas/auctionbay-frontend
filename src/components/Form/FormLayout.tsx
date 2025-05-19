import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  background: #F6F6F4;
  overflow: hidden;
`

export const LeftGrid = styled.div`
  grid-column: 1 / span 8;
  background: #F6F6F4;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const RightGrid = styled.div`
  grid-column: 9 / span 4;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 32px;
  width: 464px;
  height: 1008px; 
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 32px;
  height: 100%;
  width: 100%;
`

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 64px;
  object-fit: cover;
`

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 384px;
  margin: 0 auto;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.h2};
  font-weight: 700;
  text-align: center;
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  opacity: 0.7;
`

export const NameRow = styled.div`
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
`

export const FullWidthButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 16px;
`

export const Footer = styled.div`
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

export const StyledLink = styled(Link)``

export const ServerError = styled.div`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: -16px;
`

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: -20px;
  margin-bottom: 8px;
`

export const StyledForgotPassword = styled(Link)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #74817f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const BackToLogin = styled(Link)`
   display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
    	
  font-size: 12px;
  font-weight: 300;
  color: #74817F;
  text-decoration: none;

  img {
    display: block;
  }
`