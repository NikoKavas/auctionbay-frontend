import React from 'react'
import styled from 'styled-components'
import logoSrc from '../assets/react.svg'
import { theme } from '../styles/theme'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: ${theme.colors.white};
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${theme.font.family};
  font-size: 16px;
  color: ${theme.colors.secondary};
`

// Log in kot link
const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;        
  font-weight: bold;    
  cursor: pointer;
  color: ${theme.colors.secondary};
  &:hover { text-decoration: underline; }
`

// Sign Up kot temni "pill"
const DarkButton = styled.button`
  height: 40px;
  padding: 8px 16px;
  border-radius: 16px;
  background: ${theme.colors.secondary};  /* #161817 */
  color: ${theme.colors.white};           /* #ffffff */
  font-family: ${theme.font.family};
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`

const Separator = styled.span`
  color: ${theme.colors.secondary};
`

export const Header: React.FC = () => (
  <Wrapper>
    <Logo src={logoSrc} alt="AuctionBay logo" />
    <Nav>
      <LinkButton onClick={() => {/* goto /login */}}>
        Log in
      </LinkButton>
      <Separator>or</Separator>
      <DarkButton onClick={() => {/* goto /register */}}>
        Sign Up
      </DarkButton>
    </Nav>
  </Wrapper>
)
