// src/components/AuctionCard.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import type { AuctionType } from '../types/auction'
import { TimeTag } from './Tags/TimeTag'
import { getRemainingHours } from '../utils/time'
import { Tag, TagVariant } from './Tags/Tag'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import authStore from '../stores/auth.store'
import { observer } from 'mobx-react-lite'
import EditAuctionModal from './EditAuctionModal'

interface Props {
  auction: AuctionType
  hideActions?: boolean
  context?: 'default' | 'bidding' | 'won'
}

const Card = styled.div`
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  aspect-ratio: 216 / 298;
  direction: vertical;
  alignment: middle-left;
  vertical-resizing: fixed;
  horizontal-resizing: fixed;
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
  vertical-resizing: hug;
`

const Price = styled.div`
  margin-top: 8px;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 24px;
`


const ImageWrapper = styled.div`
  flex: 1;
  width: calc(100% + 24px);
  margin: 4px -12px 0;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px -12px 0;
`

const DeleteButton = styled(Button).attrs({ variant: 'tertiary' })`
  box-sizing: border-box;
  flex: 0 0 calc((48 / 208) * 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 8px 16px;
  gap: 8px;

  svg { width: 16px; height: 16px; }
`

const EditButton = styled(Button).attrs({ variant: 'secondary' })`
  box-sizing: border-box;
  flex: 0 0 calc((156 / 208) * 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  svg { width: 16px; height: 16px; fill: white; }
`
const TrashIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path
      d="M3.99992 12.6667C3.99992 13.4 4.59992 14 5.33325 14H10.6666C11.3999 14 11.9999 13.4 11.9999 12.6667V4.66667H3.99992V12.6667ZM5.33325 6H10.6666V12.6667H5.33325V6ZM10.3333 2.66667L9.66658 2H6.33325L5.66659 2.66667H3.33325V4H12.6666V2.66667H10.3333Z"
      fill="currentColor"
    />
  </svg>
)
const PencilIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path
      d="M9.37333 6.01333L9.98667 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6.01333ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
    />
  </svg>
)

export const AuctionCard: React.FC<Props> = observer(
  ({ auction, hideActions, context = 'default' }) => {
    
  const [current, setCurrent] = useState<AuctionType>(auction)
  const hours = getRemainingHours(current.endTime)

  const highestAmount  = current.bids?.length
    ? Math.max(...current.bids.map(b => b.amount))
    : current.startingBid

  const nextBid = highestAmount  + 1
  
  const highestBid = current.bids?.find(b => b.amount === highestAmount)
  const amWinning  = highestBid?.userId === authStore.user?.id

  if (context === 'bidding' && hours <= 0) return null
  
  if (context === 'won') {
     if (hours > 0)      return null          
     if (!amWinning)     return null          
   }

    let tag: TagVariant
    if (context === 'bidding') {
      tag = amWinning ? 'winning' : 'outbid'
    } else {
      tag = hours > 0 ? 'inprogress' : 'done'
    }

    const [isEditing, setIsEditing] = useState(false)

  return (
    <>
    <Link to={`/auctions/${current.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card>
      <Header>
        <Tag variant={tag}>
              {tag === 'inprogress' ? 'In progress'
               : tag === 'done'       ? 'Done'
               : tag === 'winning'    ? 'Winning'
               :                        'Outbid'}
            </Tag>

            {hours > 0 && <TimeTag endTime={current.endTime} />}
        
      </Header>
      <Title>{current.title}</Title>
      <Price>{nextBid.toFixed(0)} €</Price>

      <ImageWrapper>
        <Img src={`${import.meta.env.VITE_API_URL || ''}/files/${current.image}`} />
      </ImageWrapper>
      
       {!hideActions && context !== 'bidding' && hours > 0 &&  (
      <Actions>
        <DeleteButton>
            <TrashIcon />
          </DeleteButton>
            <EditButton onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setIsEditing(true);
              console.log('EDIT CLICKED!')
            }}>
              <PencilIcon /> Edit
            </EditButton>
      </Actions>
      )}
    </Card>
    </Link>
    {isEditing && (
        <EditAuctionModal
          auction={current}
          onClose={() => {
            console.log('CLOSING MODAL')
            setIsEditing(false)
          }}
          onSaved={(updated) => {
            setCurrent(updated)
            setIsEditing(false)
          }}
        />
      )}
    </>
  )
})