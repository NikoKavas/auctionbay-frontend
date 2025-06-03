import React, { useState } from 'react'
import styled from 'styled-components'
import type { AuctionType, BidType } from '../../types/auction'
import { Tag } from '../Tags/Tag'
import { TimeTag } from '../Tags/TimeTag'
import { FullWidthButton } from '../Form/FormLayout'
import { InputField } from '../Form/InputField'
import { fetchOneAuction, placeBid } from '../../services/auction'

const Container = styled.div`
  display: flex;
  gap: 16px;
  box-sizing: border-box;
  margin: 0 auto;
  height: calc(100vh - 104px);
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`

const LeftPanel = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 100%;
`

const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`

const AuctionInfo = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-direction: column;
  gap: 16px;
`

const SlimTag = styled(Tag)`   
  gap: 8px; 
  padding: 2px 8px;       
  font-size: 16px;  
  line-height: 24px;     
`

const SlimTimeTag = styled(TimeTag)`
  padding: 2px 8px;
  font-size: 16px;
  line-height: 24px;
  gap: 4px;

  svg {
    width: 20px;
    height: 20px;
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.h2};
  margin: 0 0 8px;
  color: ##000000;
  font-weight: 700;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.body};
  line-height: 1.5;
  margin-bottom: 16px;
  color: #000000;
  font-weight: 300;
  line-height: 24px;
`

const BidForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`

const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: right;
  padding: 0px;
  gap: 8px;

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`

const HistoryContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 100%;
`

const HistoryTitle = styled.h2`
  margin: 0 0 12px;
  font-size: ${({ theme }) => theme.font.sizes.h2};
  color: ${({ theme }) => theme.colors.secondary};
`

const HistoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 8px 0;
  border-bottom: 1px solid #EDF4F2;
  gap: 32px;
`

const HistoryUser = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  object-fit: cover;
`

const HistoryName = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: #000000;
  font-weight: 300;
  line-height: 24px;
`

const HistoryTime = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 300;
  line-height: 24px;
`

const HistoryAmount = styled.div`
  background: #f4ff47;
  border-radius: 16px;
  padding: 6px 16px;
  gap: 4px;
  line-height: 120%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: #272D2D;
`

const ErrorText = styled.span`
  position: absolute;
  top: 100%;      
  left: 38px;        
  margin-top: 0px;
  font-size: 11px;
  color:rgb(241, 36, 36); 
`;

interface Props {
  auction: AuctionType
}

const AuctionDetailView: React.FC<Props> = ({ auction }) => {

  const [bids, setBids] = useState<BidType[]>(auction.bids);

  const highestBidAmount = auction.bids.length > 0
    ? Math.max(...auction.bids.map((b) => b.amount))
    : 0

  const minAllowedBid = highestBidAmount > 0
    ? highestBidAmount + 1
    : auction.startingBid + 1

  const [bidValue, setBidValue] = useState<number>(minAllowedBid)
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined)

  const isStillOpen = new Date(auction.endTime).getTime() > Date.now()

  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (bidValue < minAllowedBid) {
      setErrorMsg(`Minimal Bid: ${minAllowedBid} €`);
      return;
    }

    try {
      await placeBid(auction.id, bidValue);  

      const fresh = await fetchOneAuction(auction.id);
      setBids(fresh.bids);

      setBidValue(minAllowedBid + 1);
      setErrorMsg(undefined);
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || 'Bid failed');
    }
  };

  return (
    <Container>
      <LeftPanel>
        <LeftImage
          src={`${import.meta.env.VITE_API_URL}/files/${auction.image}`}
          alt={auction.title}
        />
      </LeftPanel>

      <RightPanel>
        <AuctionInfo>
        
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <SlimTag variant={isStillOpen ? 'inprogress' : 'done'}>
              {isStillOpen ? 'In progress' : 'Done'}
            </SlimTag>

            {isStillOpen && <SlimTimeTag endTime={auction.endTime} />}
          </div>

          <Title>{auction.title}</Title>

          <Description>{auction.description}</Description>
          <ActionBar>
          
          {isStillOpen && (
            <BidForm onSubmit={handleBidSubmit}>
              <label htmlFor="bid-value" style={{fontWeight: '300'}}>Bid:</label>
               <InputField
                label=""
                type="number"
                value={bidValue}
                onChange={(e) => {
                  const n = Number(e.currentTarget.value)
                  setBidValue(n)
                  if (n >= minAllowedBid) {
                    setErrorMsg(undefined)
                  }
                }}
                min={minAllowedBid}
                
                placeholder={`${minAllowedBid}`}
                style={{ width: '83px', minHeight: '40px', gap: '0px', marginTop: '-8px' }}
              />
              
              <FullWidthButton type="submit" variant="primary">Place bid</FullWidthButton>
              {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
            </BidForm>
          )}
          </ActionBar>
        </AuctionInfo>

        <HistoryContainer>
          <HistoryTitle>
            Bidding history ({auction.bids.length})
          </HistoryTitle>
          <HistoryList>
            {bids.map((bid) => (
              <HistoryItem key={bid.id}>
                <HistoryUser>
                  <AvatarImg
                    src={bid.user.avatarUrl || '/default-avatar.png'}
                    alt={`${bid.user.first_name} ${bid.user.last_name}`}
                  />
                  <HistoryName>
                    {bid.user.first_name} {bid.user.last_name}
                  </HistoryName>
                </HistoryUser>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <HistoryTime>
                    {new Date(bid.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    {'  '}
                    {new Date(bid.createdAt).toLocaleDateString()}
                  </HistoryTime>
                  <HistoryAmount>{bid.amount.toFixed(0)} €</HistoryAmount>
                </div>
              </HistoryItem>
            ))}
          </HistoryList>
        </HistoryContainer>
      </RightPanel>
    </Container>
  )
}

export default React.memo(AuctionDetailView)
