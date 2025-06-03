// src/components/AuctionDetail/AuctionDetail.tsx

import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useAuction } from '../hooks/useAuction'
import AuctionDetailView from '../components/AuctionDetail/AuctionDetailView'
import Navbar from '../components/Navbar/Navbar'

const CenteredMessage = styled.div`
  padding: 32px;
  text-align: center;
`

const AuctionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data: auction, loading, error } = useAuction(id)

  if (loading) {
    return (
      <>
        <Navbar />
        <CenteredMessage>Loading auction…</CenteredMessage>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <CenteredMessage style={{ color: 'red' }}>
          Error loading auction: {error}
        </CenteredMessage>
      </>
    )
  }

  if (!auction) {
    return (
      <>
        <Navbar />
        <CenteredMessage>Auction not found.</CenteredMessage>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <AuctionDetailView auction={auction} />
    </>
  )
}

export default AuctionDetail
