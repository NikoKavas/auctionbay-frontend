import { useEffect, useState } from 'react';
import { fetchAllAuctions } from '../services/auction';
import type { AuctionType } from '../types/auction';

export function useAllAuctions() {
  const [data, setData]     = useState<AuctionType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchAllAuctions()
      .then((aucs) => setData(aucs))
      .catch((err) => setError(err.message || 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
