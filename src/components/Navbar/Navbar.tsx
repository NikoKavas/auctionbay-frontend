import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Nav,
  LeftGroup,
  RightGroup,
  LogoLink,
  Tab,
  TabGroup,
  ActionButton,
  AvatarButton,
  PlusButton,
  AvatarWrapper,
  Menu, MenuItem, LogoutBtn
} from './Navbar.styles'
import logoSrc from '../../assets/logo.png'
import avatarSrc from '../../assets/a.png'
import authStore from '../../stores/auth.store'
import AddAuctionModal from '../AddAuctionModal' 
import ProfileSettingsModal from '../ProfileSettingsModal'

const Navbar: React.FC = () => {
  const current = window.location.pathname

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const [showModal, setShowModal] = useState(false)
  const [showProfileSettings, setShowProfileSettings] = useState(false)

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  const logout = () => {
    authStore.logout()
    setOpen(false)
    navigate('/login')
  }

  

  return (
    <>
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
        <PlusButton type="button" onClick={() => setShowModal(true)}>
          <svg viewBox="0 0 24 24">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </PlusButton>
        <AvatarWrapper>
          <AvatarButton
            type="button"
            aria-label="User menu"
            onClick={() => setOpen((v) => !v)}
          >
            <img src={avatarSrc} alt="User avatar" />
          </AvatarButton>

          {open && (
            <Menu ref={menuRef}>
              <MenuItem onClick={() => {
                setOpen(false)
                setShowProfileSettings(true)
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9533 8.65331C12.98 8.43998 13 8.22665 13 7.99998C13 7.77331 12.98 7.55998 12.9533 7.34665L14.36 6.24665C14.4867 6.14665 14.52 5.96665 14.44 5.81998L13.1067 3.51331C13.0467 3.40665 12.9333 3.34665 12.8133 3.34665C12.7733 3.34665 12.7333 3.35331 12.7 3.36665L11.04 4.03331C10.6933 3.76665 10.32 3.54665 9.91335 3.37998L9.66002 1.61331C9.64002 1.45331 9.50002 1.33331 9.33335 1.33331H6.66668C6.50002 1.33331 6.36002 1.45331 6.34002 1.61331L6.08668 3.37998C5.68002 3.54665 5.30668 3.77331 4.96002 4.03331L3.30001 3.36665C3.26002 3.35331 3.22002 3.34665 3.18002 3.34665C3.06668 3.34665 2.95335 3.40665 2.89335 3.51331L1.56001 5.81998C1.47335 5.96665 1.51335 6.14665 1.64002 6.24665L3.04668 7.34665C3.02002 7.55998 3.00002 7.77998 3.00002 7.99998C3.00002 8.21998 3.02002 8.43998 3.04668 8.65331L1.64002 9.75331C1.51335 9.85331 1.48001 10.0333 1.56001 10.18L2.89335 12.4866C2.95335 12.5933 3.06668 12.6533 3.18668 12.6533C3.22668 12.6533 3.26668 12.6466 3.30001 12.6333L4.96002 11.9666C5.30668 12.2333 5.68002 12.4533 6.08668 12.62L6.34002 14.3866C6.36002 14.5466 6.50002 14.6666 6.66668 14.6666H9.33335C9.50002 14.6666 9.64002 14.5466 9.66002 14.3866L9.91335 12.62C10.32 12.4533 10.6933 12.2266 11.04 11.9666L12.7 12.6333C12.74 12.6466 12.78 12.6533 12.82 12.6533C12.9333 12.6533 13.0467 12.5933 13.1067 12.4866L14.44 10.18C14.52 10.0333 14.4867 9.85331 14.36 9.75331L12.9533 8.65331ZM11.6333 7.51331C11.66 7.71998 11.6667 7.85998 11.6667 7.99998C11.6667 8.13998 11.6533 8.28665 11.6333 8.48665L11.54 9.23998L12.1333 9.70665L12.8533 10.2666L12.3867 11.0733L11.54 10.7333L10.8467 10.4533L10.2467 10.9066C9.96002 11.12 9.68668 11.28 9.41335 11.3933L8.70668 11.68L8.60002 12.4333L8.46668 13.3333H7.53335L7.40668 12.4333L7.30002 11.68L6.59335 11.3933C6.30668 11.2733 6.04001 11.12 5.77335 10.92L5.16668 10.4533L4.46002 10.74L3.61335 11.08L3.14668 10.2733L3.86668 9.71331L4.46002 9.24665L4.36668 8.49331C4.34668 8.28665 4.33335 8.13331 4.33335 7.99998C4.33335 7.86665 4.34668 7.71331 4.36668 7.51331L4.46002 6.75998L3.86668 6.29331L3.14668 5.73331L3.61335 4.92665L4.46002 5.26665L5.15335 5.54665L5.75335 5.09331C6.04002 4.87998 6.31335 4.71998 6.58668 4.60665L7.29335 4.31998L7.40002 3.56665L7.53335 2.66665H8.46002L8.58668 3.56665L8.69335 4.31998L9.40002 4.60665C9.68668 4.72665 9.95335 4.87998 10.22 5.07998L10.8267 5.54665L11.5333 5.25998L12.38 4.91998L12.8467 5.72665L12.1333 6.29331L11.54 6.75998L11.6333 7.51331ZM8.00002 5.33331C6.52668 5.33331 5.33335 6.52665 5.33335 7.99998C5.33335 9.47331 6.52668 10.6666 8.00002 10.6666C9.47335 10.6666 10.6667 9.47331 10.6667 7.99998C10.6667 6.52665 9.47335 5.33331 8.00002 5.33331ZM8.00002 9.33331C7.26668 9.33331 6.66668 8.73331 6.66668 7.99998C6.66668 7.26665 7.26668 6.66665 8.00002 6.66665C8.73335 6.66665 9.33335 7.26665 9.33335 7.99998C9.33335 8.73331 8.73335 9.33331 8.00002 9.33331Z" 
                fill="currentColor"/>
                </svg>

                Profile settings
              </MenuItem>

              <LogoutBtn onClick={logout}>Log out</LogoutBtn>
            </Menu>
          )}
        </AvatarWrapper>
      </RightGroup>
    </Nav>

    {showModal && 
        <AddAuctionModal onClose={() => setShowModal(false)} />
      }
    {showProfileSettings && (
    <ProfileSettingsModal
      onClose={() => setShowProfileSettings(false)}
      />
    )}
    </>
  )
  
}

export default Navbar
