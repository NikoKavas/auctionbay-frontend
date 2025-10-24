import React from 'react'
import styled from 'styled-components'
import { AuctionCard } from '../AuctionCard'
import { getRemainingHours } from '../../utils/time'
import { useBiddingAuctions } from '../../hooks/useBiddingAuctions'
import { EmptyState } from './EmptyState'

const AuctionsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* single column on phones */
  }
`
const CardWrapper = styled.div`
  grid-column: span 2;
`

export const Bidding: React.FC = () => {
  const { data, loading, error } = useBiddingAuctions()

  if (loading) return <p>Loading…</p>
  if (error)   return <p style={{ color: 'red' }}>{error}</p>


  const inProgress = data
    .filter(a => getRemainingHours(a.endTime) > 0)
    .sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

  const done = data
    .filter(a => getRemainingHours(a.endTime) === 0)
    .sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

  const ordered = [...inProgress, ...done]

  return (
    <AuctionsGrid>
      {ordered.length === 0 ? (
            <EmptyState
              title="No bidding in progress!"
              subtitle="Start bidding by finding new items you like on “Auction” page!"
            />
          ) : (
      ordered.map(auc => (
        <CardWrapper key={auc.id}>
          <AuctionCard auction={auc} context='bidding'hideActions />
        </CardWrapper>
      ))
    )}
    </AuctionsGrid>
  )
}
