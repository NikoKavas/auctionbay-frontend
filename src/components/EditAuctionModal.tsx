// src/components/EditAuctionModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from './Button';
import { InputField } from './Form/InputField';
import {
  FieldWrapper,
  StyledLabel,
  StyledInput
} from './Form/InputField.styles';
import EuroIcon from '../assets/Eur.svg';
import CalendarIcon from '../assets/Time.svg';
import { AuctionType } from '../types/auction';
import { useEditAuctionForm } from '../hooks/useEditAuctionForm';

const Overlay = styled.div`
  position: fixed;
  inset: 0;                        
  background: rgba(0,0,0,0.6);     
  display: flex;
  align-items: center;
  justify-content: center;
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
  gap: 24px;
  max-height: 80vh;
  overflow-y: auto; 
`
const Heading = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #071015;
`
const ImageBox = styled.div`
  width: 100%;
  height: 168px;
  background: #f5f5f3;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;         
  border-radius: 16px;
`

const Row = styled.div`
  display: flex;
  gap: 24px;
`

const StyledTextarea = styled(StyledInput).attrs({ as: 'textarea', rows: 4 })`
  min-height: 140px;
  resize: vertical;
`;

type DescProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};
const DescriptionField: React.FC<DescProps> = ({ label, error, ...props }) => (
  <FieldWrapper focused={false} filled={Boolean(props.value)}>
    <StyledLabel>{label}</StyledLabel>
    <StyledTextarea {...props} filled={Boolean(props.value)} />
  </FieldWrapper>
);

interface Props {
  auction: AuctionType;
  onClose: () => void;
  onSaved: (updated: AuctionType) => void;
}

const EditAuctionModal: React.FC<Props> = ({ auction, onClose, onSaved }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(
    `${import.meta.env.VITE_API_URL || ''}/files/${auction.image}`
  );

  const hasBids = auction.bids.length > 0

  const {
    control,
    errors,
    onSubmit,
    loading,
    error
  } = useEditAuctionForm(auction, (updated) => {
    onSaved(updated);
    onClose();
  });

  useEffect(() => {
    return () => {
      if (preview?.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return createPortal(
    <Overlay>
      <Card>
        <Heading>Edit auction</Heading>
        <form
          onSubmit={onSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <>
                <ImageBox onClick={() => fileRef.current?.click()}>
                  {preview ? (
                    <PreviewImg src={preview} />
                  ) : (
                    <Button type="button" variant="tertiary">
                      Add image
                    </Button>
                  )}
                </ImageBox>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const files = e.target.files;
                    if (!files?.length) return;
                    const url = URL.createObjectURL(files[0]);
                    setPreview(url);
                    field.onChange(files);
                  }}
                />
                {errors.image && (
                  <p style={{ color: 'red', margin: 0 }}>
                    {errors.image.message}
                  </p>
                )}
              </>
            )}
          />

          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Title"
                placeholder="Write item name here"
                error={errors.title?.message}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <DescriptionField
                {...field}
                label="Description"
                placeholder="Write description here…"
                error={errors.description?.message}
              />
            )}
          />

          <Row>
            <Controller
              name="startingBid"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  type="number"
                  label="Starting price"
                  placeholder="Price"
                  iconSrc={EuroIcon}
                  error={errors.startingBid?.message}
                  disabled={hasBids}
                  readOnly={hasBids}
                />
              )}
            />
            <Controller
              name="endTime"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  type="text"
                  label="End date"
                  placeholder="dd.mm.yyyy"
                  iconSrc={CalendarIcon}
                  error={errors.endTime?.message}
                />
              )}
            />
          </Row>

          {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}

          <Row style={{ justifyContent: 'flex-end', gap: 16 }}>
            <Button variant="alternative" type="button" onClick={onClose}>
              Discard changes
            </Button>
            <Button variant="secondary" type="submit" disabled={loading}>
              Edit auction
            </Button>
          </Row>
        </form>
      </Card>
    </Overlay>,
    document.body
  );
};

export default EditAuctionModal;
