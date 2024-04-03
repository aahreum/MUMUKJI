import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import Wrap from './components/common/wrap/Wrap'
import { RecoilRoot } from 'recoil'

const App = (): React.ReactElement => {
  return (
    <RecoilRoot>
      <Wrap>
        <RouterProvider router={router} />
      </Wrap>
    </RecoilRoot>
  )
}

export default App
