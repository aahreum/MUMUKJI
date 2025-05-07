import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/Index'
import Layout from '@/pages/Layout'
import NotFound from '@/pages/NotFound'
import InProgress from '@/pages/InProgress'
import Group from '@/pages/Group'
import { GroupProvider } from '@/contexts/GroupContext'
import GroupAdd from '@/pages/GroupAdd'

const router = createBrowserRouter([
  {
    id: 'rootLayout',
    element: (
      <GroupProvider>
        <Layout />
      </GroupProvider>
    ),
    children: [
      {
        id: 'index',
        path: '/',
        element: <Index />,
      },
      {
        id: 'history',
        path: '/history',
        element: <InProgress />,
      },
      {
        id: 'group',
        path: '/group',
        element: <Group />,
      },
    ],
  },
  {
    id: 'groupAdd',
    path: '/group/:id',
    element: (
      <GroupProvider>
        <GroupAdd />
      </GroupProvider>
    ),
  },
  {
    id: 'notFound',
    path: '*',
    element: <NotFound />,
  },
])

export default router
