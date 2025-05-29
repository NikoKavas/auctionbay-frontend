import React from 'react'
import styled from 'styled-components'
import { useAllAuctions } from '../../hooks/useAuctions'
import { AuctionCard } from '../AuctionCard'

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

export const Auctions: React.FC = () => {
  const { data, loading, error } = useAllAuctions()

  if (loading) return <p>Loading…</p>
  if (error)   return <p style={{ color: 'red' }}>{error}</p>

  if (data.length === 0) {
    return (
      
        <EmptyState>
          <h2>Oh no, no auctions added!</h2>
          <p>
            To add new auctions click the “+” button in the navigation bar and
            new auctions will appear here!
          </p>
        </EmptyState>
     
    )
  }

  return (
    <AuctionsGrid>
      {data.map((auc) => (
        <CardWrapper key={auc.id}>
          <AuctionCard auction={auc} hideActions/>
        </CardWrapper>
      ))}
    </AuctionsGrid>
  )
}
