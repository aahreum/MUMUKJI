import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/Index'
import Layout from '@/pages/Layout'
import NotFound from '@/pages/NotFound'
import InProgress from '@/pages/InProgress'
import Group from '@/pages/Group'
import GroupAdd from '@/pages/GroupAdd'
import GroupEdit from '@/pages/GroupEdit'

const router = createBrowserRouter([
  {
    id: 'rootLayout',
    element: <Layout />,
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
    path: '/group/add',
    element: <GroupAdd />,
  },
  {
    id: 'groupEdit',
    path: '/group/:id',
    element: <GroupEdit />,
  },
  {
    id: 'notFound',
    path: '*',
    element: <NotFound />,
  },
])

export default router
