import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMyAuctions } from '../../hooks/useMyAuctions'
import { AuctionCard } from '../AuctionCard'
import { getRemainingHours } from '../../utils/time'
import { AuctionType } from 'types/auction'
import { EmptyState } from './EmptyState'

const AuctionsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
  grid-auto-flow: dense
`
const CardWrapper = styled.div`
  grid-column: span 2;
`


export const MyAuctions: React.FC = () => {
  const { data, loading, error } = useMyAuctions()
  
  const [auctions, setAuctions] = useState<AuctionType[]>([])
  useEffect(() => setAuctions(data), [data])
  
  const handleDelete = (id: string) =>
    setAuctions(prev => prev.filter(a => a.id !== id))

  if (loading) return <p>Loading…</p>
  if (error)   return <p style={{ color: 'red' }}>{error}</p>


  const inProgress = auctions
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
        title="Oh no, no auctions added!"
        subtitle="To add new auction click “+” button in navigation bar and new auctions wil be added here!"
      />
    ) : (
      ordered.map(auc => (
        <CardWrapper key={auc.id}>
          <AuctionCard auction={auc} context='default'
          onDelete={handleDelete}
           />
        </CardWrapper>
      ))
    )}
    </AuctionsGrid>
  )
}
