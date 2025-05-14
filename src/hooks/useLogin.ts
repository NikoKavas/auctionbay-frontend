// src/hooks/useLogin.ts
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { login as loginApi, fetchUser } from '../services/user'
import type { UserType } from '../types/user'

export interface LoginFormValues {
  email: string
  password: string
}

export function useLogin() {
  const schema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<UserType | null>(null)

  // 3. onSubmit: najprej klicemo /auth/login, potem /auth/me
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    setError(null)
    try {
      // 3a. POST /auth/login
      await loginApi(data)

      // 3b. GET /auth/me
      const me = await fetchUser()
      setUser(me)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  })

  return {
    // za form komponento
    control,
    errors,
    onSubmit,

    // za UI state
    loading,
    error,

    // po uspehu
    user,
  }
}
