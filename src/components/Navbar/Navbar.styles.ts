import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  width: 100%;
  box-sizing: border-box;
  height: 104px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0px 16px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding: 12px 16px;
    justify-content: center;
  }
`

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 8px;
  }
  
`

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;
  
  background: #FFFFFF;
  border-radius: 32px;

  @media (max-width: 1024px) {
    gap: 4px;
    padding: 2px;
  }

  /* ✅ Move to new line on small screens */
  @media (max-width: 768px) {
    margin-top: 8px;
    width: 100%;
    justify-content: center;
  }
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

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    padding: 12px;
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

   @media (max-width: 768px) {
    gap: 2px;

    a span {
      display: none; /* hide tab text, only show icons */
    }
  }
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

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  min-width: 204px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  z-index: 1000;
`

export const MenuItem = styled(Button).attrs({
  variant: 'tertiary',
})`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;   
  }
`;

export const LogoutBtn = styled(Button).attrs({
  variant: 'tertiary',
})`
  width: 100%;
`;

export const DefaultIcon = styled.svg`
  width: 32px;
  height: 32px;
  fill: #071015;
`