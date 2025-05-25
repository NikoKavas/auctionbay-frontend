import React from 'react'
import { TabsContainer, TabButton } from './ProfileTabs.styles'

export type ProfileTabKey = 'my' | 'bidding' | 'won'

interface Props {
  active: ProfileTabKey
  onChange: (tab: ProfileTabKey) => void
}

export const ProfileTabs: React.FC<Props> = ({ active, onChange }) => (
  <TabsContainer>
    <TabButton active={active === 'my'} onClick={() => onChange('my')}>
      My auctions
    </TabButton>
    <TabButton
      active={active === 'bidding'}
      onClick={() => onChange('bidding')}
    >
      Bidding
    </TabButton>
    <TabButton active={active === 'won'} onClick={() => onChange('won')}>
      Won
    </TabButton>
  </TabsContainer>
)
