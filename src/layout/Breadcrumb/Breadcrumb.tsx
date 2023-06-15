import { Fragment } from 'react'

import { Box, Typography } from '@musma/react-component'
import { FillHome2Icon, ArrowRightLargeIcon } from '@musma/react-icons'

export const Breadcrumb = () => {
  return (
    <Box css={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <FillHome2Icon />

      <ArrowRightLargeIcon />

      <Fragment>
        <Typography type="body2">232</Typography>
      </Fragment>
    </Box>
  )
}
