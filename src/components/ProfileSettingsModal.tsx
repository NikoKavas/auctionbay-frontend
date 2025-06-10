import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Button } from './Button'
import { InputField } from './Form/InputField'
import authStore from '../stores/auth.store'
import { updateProfile } from '../services/user'
import toast from 'react-hot-toast'

const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
`
const Card = styled.div`
  width: 100%; 
  max-width: 520px;
  background: #fff; 
  border-radius: 16px;
  padding: 16px; 
  display: flex; 
  flex-direction: column; 
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;                
  padding: 32px 0px;                                    
`

const Heading = styled.h2`
  margin: 0; font-size: 23px; font-weight: 700; color: #071015;
`
const LinkText = styled.span`
  color: #272D2D;
  cursor: pointer;
  &:hover { text-decoration: none; }
`

const Row = styled.div`
  display: flex;
  gap: 16px;          
  width: 100%;
`

interface Props {
  onClose: () => void
}

const ProfileSettingsModal: React.FC<Props> = ({ onClose }) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const user = authStore.user!
  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName]   = useState(user.last_name)
  const [email, setEmail]         = useState(user.email)
  const [err,  setErr]            = useState<string|null>(null)
  const [loading, setLoading]     = useState(false)


  const emailOk = (e: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  const handleSave = async () => {
    if (!firstName.trim() || !lastName.trim()) {
       return toast.error('Name and surname are required.')
    }
    if (!emailOk(email)) {
      return toast.error('Enter a valid e-mail.')
    }

    setLoading(true); setErr(null)
    try {
      const updated = await updateProfile({
        first_name: firstName.trim(),
        last_name:  lastName.trim(),
        email:      email.trim()
      })
      authStore.user = updated as typeof authStore.user
      onClose()
    } catch (e: any) {
      setErr(e.response?.data?.message || 'Save failed.')
    } finally {
      setLoading(false)
    }
  }

  return createPortal(
    <Overlay onClick={onClose}>
      <Card onClick={e => e.stopPropagation()}>
        <Heading>Profile settings</Heading>
        <Content>
        <Row>
            <InputField
            label="Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            />
            <InputField
            label="Surname"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            />
        </Row>
        <InputField
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <LinkText onClick={() => {/* odpri change-password modal… */}}>
          Change password
        </LinkText>
        <LinkText onClick={() => fileRef.current?.click()}>
          Change profile picture
        </LinkText>
        </Content>

        <div style={{ marginTop: 'auto', display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
          <Button variant="alternative" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </div>
      </Card>
    </Overlay>,
    document.body
  )
}

export default ProfileSettingsModal
