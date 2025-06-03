// src/hooks/useAuction.ts

import { useEffect, useState } from 'react'
import type { AuctionType } from '../types/auction'
import { fetchOneAuction } from '../services/auction'

export function useAuction(auctionId: string | undefined) {
  const [data, setData]       = useState<AuctionType | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    if (!auctionId) {
      return
    }

    setLoading(true)
    setError(null)

    fetchOneAuction(auctionId)
      .then((auction) => {
        setData(auction)
      })
      .catch((err) => {
        console.error('useAuction fetch failed:', err)
        setError(err.message || 'Failed to load auction')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [auctionId])

  return { data, loading, error }
}
