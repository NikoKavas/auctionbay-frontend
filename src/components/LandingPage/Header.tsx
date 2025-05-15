import React from 'react'
import styled from 'styled-components'
import logoSrc from '../../assets/logo.png'
import { theme } from '../../styles/theme'
import { Button } from '../Button'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: ${theme.colors.white};
`

const Logo = styled.img`
  width: 64px;
  height: 64px;
  gap: 32px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${theme.font.family};
  font-size: 16px;
  color: ${theme.colors.secondary};
`


const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;        
  font-weight: 700;    
  cursor: pointer;
  color: ${theme.colors.secondary};
  &:hover { text-decoration: underline; }
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
      <Button variant='secondary' onClick={() => {/* goto /register */}}>
        Sign Up
      </Button>
    </Nav>
  </Wrapper>
)
