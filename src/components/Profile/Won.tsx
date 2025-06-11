import React from 'react'
import styled from 'styled-components'
import { AuctionCard } from '../AuctionCard'
import { getRemainingHours } from '../../utils/time'
import { useWonAuctions } from '../../hooks/useWonAuctions'
import { EmptyState } from './EmptyState'

const AuctionsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
`
const CardWrapper = styled.div`
  grid-column: span 2;
`

export const Won: React.FC = () => {
  const { data, loading, error } = useWonAuctions()

  if (loading) return <p>Loading…</p>
  if (error)   return <p style={{ color: 'red' }}>{error}</p>


  const finished = data
    .filter(a => getRemainingHours(a.endTime) <= 0)
    .sort((a, b) => new Date(b.endTime).getTime() - new Date(a.endTime).getTime())

  

  return (
    <AuctionsGrid>
      {finished.length === 0 ? (
            <EmptyState
              title="Nothing here yet?"
              subtitle="When you win auction items will be displayed here! Go on and bid on your favorite items!"
            />
          ) : (
      finished.map(auc => (
        <CardWrapper key={auc.id}>
          <AuctionCard auction={auc} context='won'hideActions />
        </CardWrapper>
      ))
    )}
    </AuctionsGrid>
  )
}
