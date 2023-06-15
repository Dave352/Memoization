import { Outlet } from 'react-router-dom'

import { AppShell, Header, NavBar, NavBarLink } from '@musma/react-component'
import { FillDashboardIcon } from '@musma/react-icons'
import { observer } from 'mobx-react-lite'

import { RoutePaths } from 'src/routes'

export const AppLayout = observer(() => {
  return (
    <AppShell
      header={<Header>Header</Header>}
      navBar={
        <NavBar>
          <NavBarLink icon={FillDashboardIcon} to={RoutePaths.대시보드} label="대시보드" />
          <NavBarLink icon={FillDashboardIcon} to={RoutePaths.Hello} label="Hello" />
          <NavBarLink icon={FillDashboardIcon} to={RoutePaths.World} label="World" />
        </NavBar>
      }
    >
      <Outlet />
    </AppShell>
  )
})
