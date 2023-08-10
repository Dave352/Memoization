import {
  HeaderLeftSection,
  HeaderRightSection,
  IconAdornment,
  Header as _Header,
} from '@musma/react-component'
import { FillProfile2Icon } from '@musma/react-icons'

import { LogoIcon } from 'src/icons'

export const Header = () => {
  return (
    <_Header>
      <HeaderLeftSection logo={<LogoIcon />} />

      <HeaderRightSection css={{ justifyContent: 'space-between' }}>
        <IconAdornment>
          <FillProfile2Icon />
        </IconAdornment>
      </HeaderRightSection>
    </_Header>
  )
}
