// src/routes/RestrictedRoute.tsx
import React, { type FC } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'
import authStore from '../stores/auth.store'
import { observer } from 'mobx-react-lite'

const RestrictedRoute: FC<RouteProps> = ({ children }) => {
  if (authStore.user) {
    return <Navigate to="/profile" replace />
  }
  return <>{children}</>
}

export default observer(RestrictedRoute)
