import { Outlet } from 'react-router-dom'

import { AppShell, NavBar, NavBarLink } from '@musma/react-component'
import { FillDashboardIcon } from '@musma/react-icons'
import { observer } from 'mobx-react-lite'

import { RoutePaths } from 'src/routes'

import { Header } from '../Header'

export const AppLayout = observer(() => {
  return (
    <AppShell
      header={<Header />}
      navBar={
        <NavBar>
          <NavBarLink icon={FillDashboardIcon} to={RoutePaths.대시보드} label="대시보드" />
        </NavBar>
      }
    >
      <Outlet />
    </AppShell>
  )
})
