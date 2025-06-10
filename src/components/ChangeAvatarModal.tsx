// src/components/ChangeAvatarModal.tsx
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Button }        from './Button';
import { uploadAvatar }  from '../services/user';
import authStore         from '../stores/auth.store';

const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
`;
const Card = styled.div`
  width: 100%; max-width: 520px;
  background: #fff; border-radius: 16px;
  padding: 16px; display: flex; flex-direction: column;
`;
const Heading = styled.h2`
  margin: 0; font-size: 23px; font-weight: 700; color: #071015;
`;
const Content = styled.div`
  display: flex; flex-direction: column; align-items: center;
  gap: 16px; 
  padding: 32px 0;
`;
const AvatarImg = styled.img`
  width: 56px; height: 56px; border-radius: 50%; object-fit: cover;
`;

interface Props { onClose: () => void }

const ChangeAvatarModal: React.FC<Props> = ({ onClose }) => {
  const user = authStore.user!;
  const fileInput = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string>(
    user.avatar ? `${import.meta.env.VITE_API_URL || ''}/files/${user.avatar}` : ''
  );
  const [file, setFile]       = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr]         = useState<string|null>(null);

  const save = async () => {
    if (!file) return setErr('Choose a picture first.');
    setLoading(true); setErr(null);
    try {
      const updated = await uploadAvatar(user.id, file);
      authStore.user = updated as typeof authStore.user;
      onClose();
    } catch (e:any) {
      setErr(e.response?.data?.message || 'Upload failed.');
    } finally { setLoading(false); }
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <Card onClick={e => e.stopPropagation()}>
        <Heading>Change profile picture</Heading>

        <Content>
          <AvatarImg src={preview || avatarPlaceholder} alt="avatar" />
          <Button variant="tertiary" onClick={() => fileInput.current?.click()}>
            Upload new picture
          </Button>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            hidden
            onChange={e => {
              const f = e.target.files?.[0];
              if (!f) return;
              setFile(f);
              setPreview(URL.createObjectURL(f));
            }}
          />
          {err && <p style={{color:'red',margin:0}}>{err}</p>}
        </Content>

        <div style={{marginTop:'auto',display:'flex',gap:16,justifyContent:'flex-end'}}>
          <Button variant="alternative" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={save} disabled={loading}>
            Save changes
          </Button>
        </div>
      </Card>
    </Overlay>,
    document.body
  );
};

const avatarPlaceholder =
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><circle cx="48" cy="48" r="48" fill="%23d9d9d9"/></svg>';

export default ChangeAvatarModal
