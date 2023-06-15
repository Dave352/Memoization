import '@emotion/react'
import { MusmaTheme } from '@musma/react-component'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MusmaTheme {}
}
