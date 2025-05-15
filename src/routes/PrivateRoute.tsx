// src/routes/PrivateRoute.tsx
import React, { type FC } from 'react'
import { Navigate, useLocation, type RouteProps } from 'react-router-dom'
import authStore from '../stores/auth.store'
import { observer } from 'mobx-react-lite'

const PrivateRoute: FC<RouteProps> = ({ children }) => {
  const location = useLocation()
  if (!authStore.user) {
    // če ni user, ga preusmeri na login in shrani izvorno pot v query
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />
  }
  return <>{children}</>
}

export default observer(PrivateRoute)
