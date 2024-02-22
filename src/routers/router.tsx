import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/Index'
import Edit from '@/pages/Edit'
import Layout from '@/pages/Layout'
import List from '@/pages/List'
import NotFound from '@/pages/NotFound'

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
        id: 'edit',
        path: '/edit',
        element: <Edit />,
      },
      {
        id: 'list',
        path: '/list',
        element: <List />,
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
