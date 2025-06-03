import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import authStore from '../stores/auth.store'

import Navbar from '../components/Navbar/Navbar'                
import { ProfileWrapper, ProfileContent } from '../components/Profile/ProfileLayout'
import { ProfileTabs } from '../components/Profile/ProfileTabs'
import { MyAuctions } from '../components/Profile/MyAuctions'
import { Bidding } from '../components/Profile/Bidding'
import { Won } from '../components/Profile/Won'

const Profile: React.FC = () => {
  const [tab, setTab] = useState<'my' | 'bidding' | 'won'>('my')

  return (
    <>
      <Navbar />                                           
      <ProfileWrapper>
        <h1>Hello {authStore.user?.first_name } {authStore.user?.last_name }!</h1>

        <ProfileTabs active={tab} onChange={setTab} />

        <ProfileContent>
          {tab === 'my' && <MyAuctions />}

          {tab === 'bidding' && <Bidding />}

          {tab === 'won' && <Won />}
        </ProfileContent>
      </ProfileWrapper>
    </>
  )
}

export default observer(Profile)
