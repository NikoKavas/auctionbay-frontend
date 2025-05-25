import { useEffect, useState } from 'react';
import { fetchMyAuctions } from '../services/auction';
import type { AuctionType } from '../types/auction';

export function useMyAuctions() {
  const [data, setData]     = useState<AuctionType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchMyAuctions()
      .then((aucs) => setData(aucs))
      .catch((err) => setError(err.message || 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
