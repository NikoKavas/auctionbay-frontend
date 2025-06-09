import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMyAuctions } from '../../hooks/useMyAuctions'
import { AuctionCard } from '../AuctionCard'
import { getRemainingHours } from '../../utils/time'
import { AuctionType } from 'types/auction'

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

const EmptyState = styled.div`
  grid-column: 1 / -1;

  /* Center vse skupaj */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 100px 0;
  margin: 24px auto 0;

  h2 {
    margin: 0 0 8px;
    font-size: ${({ theme }) => theme.font.sizes.h2};
    color: ${({ theme }) => theme.colors.secondary};
    /* noben wrap, da ostane v eni vrstici */
    white-space: nowrap;
  }

  p {
    margin: 0;
    /* omeji največjo širino, da ne teče do samih robov */
    max-width: 600px;
    font-size: ${({ theme }) => theme.font.sizes.body};
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
    text-align: center;
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
      {ordered.map((auc) => (
        <CardWrapper key={auc.id}>
          <AuctionCard auction={auc} context='default'
          onDelete={handleDelete}
           />
        </CardWrapper>
      ))}
    </AuctionsGrid>
  )
}
