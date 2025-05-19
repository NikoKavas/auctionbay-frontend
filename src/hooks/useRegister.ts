// src/hooks/useRegister.ts
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { register as registerApi } from '../services/user'
import type { UserType } from '../types/user'

/** Polja obrazca – zdaj **vsa** obvezna, da se ujamejo z defaultValues */
export interface RegisterFormValues {
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
}

export function useRegister() {
  const schema = Yup.object({
    first_name:       Yup.string().required('First name is required'),
    last_name:        Yup.string().required('Last name is required'),
    email:            Yup.string().email('Invalid email').required('Email is required'),
    password:         Yup.string()
                         .matches(
                           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                           'Password must be at least 6 characters, include upper, lower letters and a number'
                         )
                         .required('Password is required'),
    confirm_password: Yup.string()
                         .oneOf([Yup.ref('password')], 'Passwords must match')
                         .required('Please confirm your password'),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      first_name:      '',
      last_name:       '',
      email:           '',
      password:        '',
      confirm_password:'',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)
  const [user,    setUser]    = useState<UserType | null>(null)

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    setError(null)
    console.log("✅ SUBMITTING", data)
    try {
      const newUser = await registerApi({
        first_name:      data.first_name,
        last_name:       data.last_name,
        email:           data.email,
        password:        data.password,
        confirm_password:data.confirm_password,
      })
      setUser(newUser)
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  })
console.log("❌ ERRORS", errors)
  return { control, errors, onSubmit, loading, error, user }
}
