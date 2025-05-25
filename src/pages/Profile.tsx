import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import authStore from '../stores/auth.store'

import Navbar from '../components/Navbar/Navbar'                
import { ProfileWrapper, ProfileContent } from '../components/Profile/ProfileLayout'
import { ProfileTabs }                     from '../components/Profile/ProfileTabs'
import { MyAuctions }                      from '../components/Profile/MyAuctions'
// kasneje: import Bidding from '../components/Profile/Bidding'
// kasneje: import Won     from '../components/Profile/Won'

const Profile: React.FC = () => {
  const [tab, setTab] = useState<'my' | 'bidding' | 'won'>('my')

  return (
    <>
      <Navbar />                                            {/* ← vstaviš Navbar sem */}
      <ProfileWrapper>
        <h1>Hello {authStore.user?.first_name}!</h1>

        <ProfileTabs active={tab} onChange={setTab} />

        <ProfileContent>
          {tab === 'my' && <MyAuctions />}

          {tab === 'bidding' && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              Bidding vsebina zaenkrat še ni narejena.
            </p>
          )}

          {tab === 'won' && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              Won vsebina zaenkrat še ni narejena.
            </p>
          )}
        </ProfileContent>
      </ProfileWrapper>
    </>
  )
}

export default observer(Profile)
