import api from './api';
import type { AuctionType } from '../types/auction';

export async function fetchMyAuctions(): Promise<AuctionType[]> {
  const resp = await api.get<AuctionType[]>('/me/auction');
  return resp.data;
}