// src/components/AuctionCard.tsx
import React from 'react'
import styled from 'styled-components'
import type { AuctionType } from '../types/auction'
import { TimeTag } from './Tags/TimeTag'
import { getRemainingHours } from '../utils/time'
import { Tag, TagVariant } from './Tags/Tag'

interface Props {
  auction: AuctionType
}

const Card = styled.div`
  min-height: 250px;
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
  color: #071015;
  font-weight: 300;
  line-height: 24px;
`

const Price = styled.div`
  margin-top: 4px;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 24px;
`

const ImageWrapper = styled.div`
  flex: 1;
  margin: 8px 0;
  gap: 8px;
  overflow: hidden;
  
`
const Img = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 12px;
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


export const AuctionCard: React.FC<Props> = ({ auction }) => {
  const hours = getRemainingHours(auction.endTime)
  const statusVariant: TagVariant = hours > 0 ? 'inprogress' : 'done'

  return (

    <Card>
      <Header>
        <Tag variant={statusVariant}>
          {statusVariant === 'inprogress' ? 'In progress' : 'Done'}
        </Tag>
       
        {statusVariant === 'inprogress' && (
          <TimeTag endTime={auction.endTime} />
        )}
        
      </Header>
      <Title>{auction.title}</Title>
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
}