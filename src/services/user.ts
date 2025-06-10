// src/services/user.ts
import api from './api'
import { apiRoutes } from '../constants/apiConstants'
import type { UserType } from '../types/user'
import type { LoginFormValues } from '../hooks/useLogin'
import type { RegisterFormValues } from '../hooks/useRegister'

export async function fetchUser(): Promise<UserType> {
  const resp = await api.get<UserType>(apiRoutes.FETCH_USER)
  return resp.data
}

export async function login(data: LoginFormValues): Promise<UserType> {
  const resp = await api.post<UserType>(apiRoutes.LOGIN, data)
  return resp.data
}

export async function register(data: RegisterFormValues): Promise<UserType> {
  const resp = await api.post<UserType>(apiRoutes.SIGNUP, data)
  return resp.data
}

export async function signout(): Promise<void> {
  await api.post(apiRoutes.SIGNOUT)
}

export async function updateProfile(payload: {
  first_name: string;
  last_name:  string;
  email:      string;
}) {
  const res = await api.patch('/users/me/profile', payload);
  return res.data;
}

export async function updatePassword(payload: {
  oldPassword:      string;
  newPassword:      string;
  confirmPassword:  string;
}): Promise<void> {
  await api.patch('/auth/me/update-password', payload);
}
