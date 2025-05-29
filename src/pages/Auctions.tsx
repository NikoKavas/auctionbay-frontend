import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import authStore from '../stores/auth.store'

import Navbar from '../components/Navbar/Navbar'                
import { ProfileWrapper, ProfileContent } from '../components/Profile/ProfileLayout'
import { Auctions }                      from '../components/Auctions/Auctions'
// kasneje: import Bidding from '../components/Profile/Bidding'
// kasneje: import Won     from '../components/Profile/Won'

const Profile: React.FC = () => {

  return (
    <>
      <Navbar />                                           
      <ProfileWrapper>
        <h1>Auctions</h1>
        <ProfileContent>
          <Auctions />
        </ProfileContent>
      </ProfileWrapper>
    </>
  )
}

export default observer(Profile)
