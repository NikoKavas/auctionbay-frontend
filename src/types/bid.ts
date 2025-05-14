export interface BidType {
  id: string;
  amount: number;
  maxAmount: number | null;
  userId: string;
  auctionId: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}