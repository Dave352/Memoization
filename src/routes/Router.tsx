import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from 'src/layout'

import { RoutePaths } from './RoutePaths'

const P_대시보드 = lazy(() => import('src/pages/대시보드'))
const Hello = lazy(() => import('src/pages/Hello'))
const World = lazy(() => import('src/pages/World'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <P_대시보드 />,
      },
      {
        path: RoutePaths.Hello,
        element: <Hello />,
      },
      {
        path: RoutePaths.World,
        element: <World />,
      },
    ],
  },
])
