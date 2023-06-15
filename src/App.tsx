import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'

import { LoadingScreen, MusmaProvider } from '@musma/react-component'

import i18n from 'src/i18n'
import { router } from 'src/routes'

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MusmaProvider>
        <Suspense fallback={<LoadingScreen type="fallback" />}>
          <RouterProvider router={router} />
        </Suspense>
      </MusmaProvider>
    </I18nextProvider>
  )
}
