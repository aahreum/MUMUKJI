import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/Index'
import Group from '@/pages/group'
import Layout from '@/pages/Layout'
// import List from '@/pages/List'
import NotFound from '@/pages/NotFound'
import InProgress from '@/pages/InProgress'

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
        id: 'list',
        path: '/list',
        // element: <List />,
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
    id: 'notFound',
    path: '*',
    element: <NotFound />,
  },
])

export default router
