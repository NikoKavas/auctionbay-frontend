import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  width: 100%;
  box-sizing: border-box;
  height: 104px;
  margin: 0 auto;
`

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
`

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;
  


  background: #FFFFFF;
  border-radius: 32px;
`

export const PlusButton = styled.button`
  /* CTA Button */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 4px;

  width: 56px;
  height: 56px;

  background: #F4FF47;
  border: none;
  border-radius: 32px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: #071015;
  }
`

export const LogoLink = styled(Link)`
  display: block;
  width: 64px;
  height: 64px;
`

export const TabGroup = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
  padding: 4px;           
  gap: 4px;               
`

export const Tab = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 56px; 
  padding: 0px 16px;
  gap: 8px;
  border-radius: 32px;
  font-weight: 400;
  text-decoration: none;
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.secondary};
  background: ${({ active, theme }) =>
    active ? theme.colors.darkGray : 'transparent'};
  transition: background 0.2s;
  
  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.darkGray : theme.colors.lightGray};
  }
    
  svg path {
    fill: ${({ active, theme }) =>
      active ? theme.colors.white : theme.colors.secondary};
    transition: fill 0.2s;
  }
  
    }
`

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const AvatarButton = styled.button`
  /* Avatar kot gumb */
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
