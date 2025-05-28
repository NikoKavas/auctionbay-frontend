// src/components/AuctionCard.tsx
import React from 'react'
import styled from 'styled-components'
import type { AuctionType } from '../types/auction'

interface Props {
  auction: AuctionType
}

const Card = styled.div`
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.secondary};
`

const Price = styled.div`
  margin-top: 4px;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`

const ImageWrapper = styled.div`
  flex: 1;
  margin: 8px 0;
  overflow: hidden;
  border-radius: 12px;
`
const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`
const ActionButton = styled.button`
  flex: 1;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: ${({ theme }) => theme.font.sizes.body};
  cursor: pointer;
`
export const AuctionCard: React.FC<Props> = ({ auction }) => (
  
  <Card>
    <Header>
      <Title>{auction.title}</Title>
      {/* placeholder za “remaining time” tag */}
      <span>🕒 30h</span>
    </Header>

    <Price>{auction.startingBid.toFixed(0)} €</Price>

    <ImageWrapper>
      <Img src={`${import.meta.env.VITE_API_URL || ''}/files/${auction.image}`} />
    </ImageWrapper>

    <Actions>
      <ActionButton>🗑️</ActionButton>
      <ActionButton>Edit</ActionButton>
    </Actions>
  </Card>
)
