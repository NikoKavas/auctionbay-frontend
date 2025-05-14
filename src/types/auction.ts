import type { BidType } from './bid';

export interface AuctionType {
  id: string;
  title: string;
  description: string;
  image: string;
  startingBid: number;
  endTime: string;       // ISO timestamp
  userId: string;
  createdAt: string;     // ISO timestamp
  updatedAt: string;     // ISO timestamp
  bids: BidType[];       // vgnezdeni “bids”
}