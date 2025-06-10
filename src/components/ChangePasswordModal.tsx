import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Button }        from './Button'
import { InputField }    from './Form/InputField'
import { updatePassword } from '../services/user'   // PATCH /me/update-password

const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
`
const Card = styled.div`
  width: 100%; max-width: 520px;
  background:#fff; border-radius:16px;
  padding:16px; display:flex; flex-direction:column;
`
const Content = styled.div`
  display:flex; flex-direction:column; gap:16px; padding:32px 0;
`
const Heading = styled.h2`
  margin:0; font-size:23px; font-weight:700; color:#071015;
`

interface Props { onClose: () => void }

const ChangePasswordModal: React.FC<Props> = ({ onClose }) => {
  const [oldPw, setOldPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [repPw, setRepPw] = useState('')
  const [err,   setErr]   = useState<string|null>(null)
  const [loading, setLoading] = useState(false)

  const save = async () => {
    if (!oldPw || !newPw || !repPw) return setErr('Fill all fields.')
    if (newPw !== repPw)           return setErr('Passwords do not match.')
    try {
      setLoading(true); setErr(null)
      await updatePassword({
        oldPassword: oldPw,
        newPassword: newPw,
        confirmPassword: repPw,
      })
      onClose()
    } catch (e:any) {
      setErr(e.response?.data?.message || 'Save failed.')
    } finally { setLoading(false) }
  }

  return createPortal(
    <Overlay onClick={onClose}>
      <Card onClick={e => e.stopPropagation()}>
        <Heading>Change password</Heading>
        <Content>
          <InputField label="Current password" type="password" value={oldPw} onChange={e=>setOldPw(e.target.value)} />
          <InputField label="New password"     type="password" value={newPw} onChange={e=>setNewPw(e.target.value)} />
          <InputField label="Repeat new password" type="password" value={repPw} onChange={e=>setRepPw(e.target.value)} />
          {err && <p style={{color:'red',margin:0}}>{err}</p>}
        </Content>
        <div style={{marginTop:'auto',display:'flex',gap:16,justifyContent:'flex-end'}}>
          <Button variant="alternative" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={save} disabled={loading}>Save changes</Button>
        </div>
      </Card>
    </Overlay>,
    document.body
  )
}

export default ChangePasswordModal
