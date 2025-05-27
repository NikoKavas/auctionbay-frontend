import React from 'react'
import styled from 'styled-components'
import { useMyAuctions } from '../../hooks/useMyAuctions'

// Grid že določen v ProfileContent, tukaj pa tvorimo wrapper
const AuctionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
  
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
        <div key={auc.id} style={{ gridColumn: 'span 2' }}>
          {/* tu bo tvoja <AuctionCard auction={auc}/> */}
          AuctionCard goes here
        </div>
      ))}
    </AuctionsGrid>
  )
}
