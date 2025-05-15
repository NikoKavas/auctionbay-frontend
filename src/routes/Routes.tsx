// src/routes/index.tsx
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}

type AppRoute = {
  path: string
  type: RouteType
  element: React.ReactNode
}

// lazy-naloži stran
const LandingPage = lazy(() => import('../pages/LandingPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
//const LoginPage    = lazy(() => import('../pages/LoginPage'))

export const appRoutes: AppRoute[] = [
  { path: '/',        type: RouteType.PUBLIC,     element: <LandingPage /> },
  { path: '/signup',  type: RouteType.RESTRICTED, element: <RegisterPage /> },
//  { path: '/login',   type: RouteType.RESTRICTED, element: <LoginPage /> },
  // tukaj v bodoče lahko dodaš PRIVATE poti...
]

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading…</div>}>
    <Routes>
      {appRoutes.map((r) => {
        const { path, type, element } = r
        if (type === RouteType.PRIVATE) {
          return <Route key={path} path={path} element={<PrivateRoute>{element}</PrivateRoute>} />
        }
        if (type === RouteType.RESTRICTED) {
          return <Route key={path} path={path} element={<RestrictedRoute>{element}</RestrictedRoute>} />
        }
        return <Route key={path} path={path} element={element} />
      })}
      {/* fallback */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  </Suspense>
)
