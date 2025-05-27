import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  Nav,
  LeftGroup,
  RightGroup,
  LogoLink,
  Tab,
  TabGroup,
  ActionButton,
  Avatar,
} from './Navbar.styles'
import logoSrc from '../../assets/logo.png'
import plusSrc from '../../assets/plus.png'
import avatarSrc from '../../assets/person.png'

const Navbar: React.FC = () => {
  const current = window.location.pathname

  return (
    <Nav>
      <LeftGroup>
        <LogoLink to="/">
          <img src={logoSrc} alt="Logo" width={64} height={64} />
        </LogoLink>
        <TabGroup>
        <Tab to="/auctions" active={current === '/auctions'}>
          <svg
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9978 5.69L16.9978 10.19V18H14.9978V12H8.9978V18H6.9978V10.19L11.9978 5.69ZM11.9978 3L1.9978 12H4.9978V20H10.9978V14H12.9978V20H18.9978V12H21.9978L11.9978 3Z"
              />
            </svg>         
          Auctions
        </Tab>
        <Tab to="/profile" active={current === '/profile'}>
          <svg
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9978 6C13.0978 6 13.9978 6.9 13.9978 8C13.9978 9.1 13.0978 10 11.9978 10C10.8978 10 9.9978 9.1 9.9978 8C9.9978 6.9 10.8978 6 11.9978 6ZM11.9978 16C14.6978 16 17.7978 17.29 17.9978 18H5.9978C6.2278 17.28 9.3078 16 11.9978 16ZM11.9978 4C9.7878 4 7.9978 5.79 7.9978 8C7.9978 10.21 9.7878 12 11.9978 12C14.2078 12 15.9978 10.21 15.9978 8C15.9978 5.79 14.2078 4 11.9978 4ZM11.9978 14C9.3278 14 3.9978 15.34 3.9978 18V20H19.9978V18C19.9978 15.34 14.6678 14 11.9978 14Z"
              />
            </svg>
          Profile
        </Tab>
        </TabGroup>
      </LeftGroup>

      <RightGroup>
        <ActionButton type="button">
          <img src={plusSrc} alt="New auction" width={24} height={24} />
        </ActionButton>
        <Avatar src={avatarSrc} alt="User avatar" />
      </RightGroup>
    </Nav>
  )
}

export default Navbar
