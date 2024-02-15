import { Outlet } from 'react-router'
import TabBar from '@/components/common/TabBar'

const Layout = (): React.ReactElement => {
  return (
    <>
      <Outlet />
      <TabBar />
    </>
  )
}

export default Layout
