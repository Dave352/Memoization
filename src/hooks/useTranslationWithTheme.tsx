import { useTranslation } from 'react-i18next'

import { useTheme } from '@emotion/react'

export const useTranslationWithTheme = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  return {
    t,
    theme,
  }
}
