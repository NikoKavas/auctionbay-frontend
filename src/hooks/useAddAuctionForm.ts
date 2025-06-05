// src/hooks/useAddAuctionForm.ts
import { useState } from 'react';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addAuction } from '../services/auction';
import type { AuctionType } from '../types/auction';


export interface AuctionFormValues {
  title:        string;
  description:  string;
  startingBid:  number;
  endTime:      string;         
  image?:       FileList;       
}

export function useAddAuctionForm(onSuccess: (newAuction: AuctionType) => void) {
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
      .matches(
        /^\d{2}\.\d{2}\.\d{4}$/,
        'End date must be in the format DD.MM.YYYY'
      )
      .test(
        'is-future-date',
        'End date must be in the future',
        (value) => {
          if (!value) return false;
          const [dd, mm, yyyy] = value.split('.');
          const asDate = new Date(`${yyyy}-${mm}-${dd}`); 
          return asDate.getTime() > Date.now();
        }
      ),

    image: Yup.mixed<FileList>()
      .test('required', 'Image is required', (value) => {
        return value instanceof FileList && value.length === 1;
      })
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<AuctionFormValues>({
    defaultValues: {
      title: '',
      description: '',
      startingBid: undefined,
      endTime: '',
      image: undefined   
    },
    resolver: yupResolver(schema) as Resolver<AuctionFormValues>, 
    mode: 'onSubmit',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    setError(null);

    try {
      const fileList = data.image!;
      const file = fileList[0];

      const [dd, mm, yyyy] = data.endTime.split('.');
      const isoString = `${yyyy}-${mm}-${dd}`;

      const formData = new FormData();
      formData.append('image',       file);
      formData.append('title',       data.title);
      formData.append('description', data.description);
      formData.append('startingBid', data.startingBid.toString());
      formData.append('endTime',     isoString);

      const newAuction: AuctionType = await addAuction(formData);
      onSuccess(newAuction);
      reset({
        title:        '',
        description:  '',
        startingBid:  0,
        endTime:      '',
        image:        undefined
      });
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || 'Something went wrong';
      setError(msg);
    } finally {
      setLoading(false);
    }
  });

  return {
    control,
    errors,
    onSubmit,
    loading,
    error,
  };
}
