import type { BidType } from './bid';

export interface AuctionType {
  id: string;
  title: string;
  description: string;
  image: string;
  startingBid: number;
  endTime: string;       
  userId: string;
  createdAt: string;     
  updatedAt: string;     
  bids: BidType[];       
}

export type {BidType}