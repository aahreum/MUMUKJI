import { RouterProvider } from 'react-router-dom'
import './styles/common.scss'
import { router } from './routers/router'

const App = (): React.ReactElement => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
