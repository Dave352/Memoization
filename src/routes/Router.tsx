import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from 'src/layout'

const P_대시보드 = lazy(() => import('src/pages/대시보드'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <P_대시보드 />,
      },
    ],
  },
])
