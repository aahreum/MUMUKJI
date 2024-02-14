import { createBrowserRouter } from 'react-router-dom'
import Index from '@/pages/Index'
import Edit from '@/pages/Edit'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'edit',
    element: <Edit />,
  },
])
