import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 32px;
  gap: 32px;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 104px;
`

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const LogoLink = styled(Link)`
  display: block;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;
`

export const NavLink = styled(Link)<{ active?: boolean }>`
  padding: 8px 16px;
  border-radius: 16px;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.sizes.body};

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.lightGray};
  }
`

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const AddButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
