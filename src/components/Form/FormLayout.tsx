import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f4;
  height: 100vh; /* fill screen exactly */
  overflow: hidden; 
  width: 100vw;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    overflow: visible; /* allow scroll on smaller devices */
    
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    padding: 32px 16px;
  }
`

export const LeftGrid = styled.div`
  grid-column: 1 / span 8;
  background: #f6f6f4;
  overflow: hidden;
  max-width: calc(100vw - 464px);

  @media (max-width: 1024px) {
    max-width: 100%; /* reset on smaller screens */
  }

  @media (max-width: 768px) {
    display: none; /* hide auction cards on mobile */
  }
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
  height: 100%;
  width: 464px;

  flex-shrink: 0;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    width: 100%;
    height: auto;
  }
`

export const Card = styled.div`
  background: #ffffff;
  border-radius: 32px;
  width: 464px;
  height: 90vh;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
    width: 100%;
    max-width: 464px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 20px;
  }
`

export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 32px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 32px 24px;
    justify-content: center;
  }
`

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 64px;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 384px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    gap: 24px;
  }
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

  @media (max-width: 768px) {
    font-size: 22px;
  }
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

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
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

  @media (max-width: 768px) {
    margin-bottom: 24px;
    font-size: 14px;
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
  color: #74817f;
  text-decoration: none;

  img {
    display: block;
  }
`