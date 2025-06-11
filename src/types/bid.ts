export interface BidType {
  id: string;
  amount: number;
  maxAmount: number | null;
  userId: string;
  auctionId: string;
  createdAt: string; 
  updatedAt: string; 

  user: {
    id: string
    first_name: string
    last_name: string
    avatar?: string
  }
}