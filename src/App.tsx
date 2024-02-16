import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import Wrap from './components/common/Wrap'

const App = (): React.ReactElement => {
  return (
    <Wrap>
      <RouterProvider router={router} />
    </Wrap>
  )
}

export default App
