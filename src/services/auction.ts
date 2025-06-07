import api from './api';
import type { AuctionType } from '../types/auction';

export async function fetchMyAuctions(): Promise<AuctionType[]> {
  const resp = await api.get<AuctionType[]>('/me/auction');
  return resp.data;
}

export async function fetchAllAuctions(): Promise<AuctionType[]> {
  const resp = await api.get<AuctionType[]>('/auctions');
  return resp.data;
}

export async function fetchOneAuction(id: string): Promise<AuctionType> {
  const resp = await api.get<AuctionType>(`/auctions/${id}`)
  return resp.data
}

export async function placeBid( auctionId: string, amount: number): Promise<void> {
  await api.post(`/auctions/${auctionId}/bid`, { amount });
}

export async function fetchBiddingAuctions(): Promise<AuctionType[]> {
  const resp = await api.get<AuctionType[]>('/me/bidding')
  return resp.data
}

export async function addAuction(formData: FormData): Promise<AuctionType> {
  const resp = await api.post<AuctionType>(
    '/me/auction',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
  return resp.data
}

export async function updateAuction(
  auctionId: string,
  formData: FormData
): Promise<AuctionType> {
  const resp = await api.patch<AuctionType>(
    `/me/auction/${auctionId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  return resp.data;
}