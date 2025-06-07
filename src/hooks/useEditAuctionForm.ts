// src/hooks/useEditAuctionForm.ts
import { useState, useEffect } from 'react';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { updateAuction } from '../services/auction';
import type { AuctionType } from '../types/auction';

export interface AuctionFormValues {
  title:        string;
  description:  string;
  startingBid:  number;
  endTime:      string;         
  image?:       FileList;       
}

export function useEditAuctionForm(
  auction: AuctionType,
  onSuccess: (updated: AuctionType) => void
) {
  const schema = Yup.object({
    title: Yup.string()
      .min(3, 'Title must be at least 3 characters')
      .max(100, 'Title cannot exceed 100 characters')
      .required('Title is required'),

    description: Yup.string()
      .min(5, 'Description must be at least 5 characters')
      .max(500, 'Description cannot exceed 500 characters')
      .required('Description is required'),

    startingBid: Yup.number()
      .typeError('Starting price must be a number')
      .positive('Starting price must be greater than zero')
      .required('Starting price is required'),

    endTime: Yup.string()
      .required('End date is required')
      .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'End date must be in the format DD.MM.YYYY')
      .test('is-future-date', 'End date must be in the future', (value) => {
        if (!value) return false
        const [dd, mm, yyyy] = value.split('.')
        return new Date(`${yyyy}-${mm}-${dd}`).getTime() > Date.now()
      }),

    image: Yup.mixed<FileList>().test(
      'image-optional',
      'You must select exactly one image',
      (val) => !val || (val instanceof FileList && val.length === 1)
    )
  })


  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<AuctionFormValues>({
    defaultValues: {
      title:        auction.title,
      description:  auction.description,
      startingBid:  auction.startingBid,
      endTime:      (() => {
        const d = new Date(auction.endTime);
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth()+1).padStart(2, '0');
        const yyyy = d.getFullYear();
        return `${dd}.${mm}.${yyyy}`;
      })(),
      image:        undefined
    },
    resolver: yupResolver(schema) as Resolver<AuctionFormValues>,
    mode: 'onSubmit'
  });

  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log('📝 EDIT FORM DATA:', data)
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      if (data.image?.length) {
        formData.append('image', data.image[0]);
      }
      formData.append('title',       data.title);
      formData.append('description', data.description);
      formData.append('startingBid', data.startingBid.toString());
      const [dd, mm, yyyy] = data.endTime.split('.');
      formData.append('endTime', `${yyyy}-${mm}-${dd}`);

      console.log('🛫 pošiljam patch…')
      const updated = await updateAuction(auction.id, formData);
      onSuccess(updated);
      reset(data);  // keep it filled in case they want to tweak again
    } catch (err: any) {
      console.error('❌ PATCH napaka:', err)
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  });

  return { control, errors, onSubmit, loading, error };
}
