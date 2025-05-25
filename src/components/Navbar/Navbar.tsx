import React from 'react'
import { useLocation } from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import plusIcon from '../../assets/plus.png'  
import {
  Nav,
  LeftGroup,
  LogoLink,
  NavLinks,
  NavLink,
  RightGroup,
  AddButton,
  Avatar,
} from './Navbar.styles'

const Navbar: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <Nav>
      <LeftGroup>
        <LogoLink to="/">
          <img src={logoImg} alt="AuctionBay logo" width={40} height={40} />
        </LogoLink>
        <NavLinks>
          <NavLink to="/" active={pathname === '/'}>
            Auctions
          </NavLink>
          <NavLink to="/profile" active={pathname.startsWith('/profile')}>
            Profile
          </NavLink>
        </NavLinks>
      </LeftGroup>

      <RightGroup>
        <AddButton variant="primary" as={LogoLink} to="/me/auction">
          <img src={plusIcon} alt="Create auction" width={16} height={16} />
        </AddButton>
        <Avatar
          src="https://ui-avatars.com/api/?name=User+Name"
          alt="User avatar"
        />
      </RightGroup>
    </Nav>
  )
}

export default Navbar
