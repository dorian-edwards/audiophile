import { Outlet } from 'react-router-dom'
import BaseLayout from './components/layouts/BaseLayout'

function App() {
  return (
    // <Canvas lightMode={true}>
    <BaseLayout>
      <Outlet />
    </BaseLayout>
    // </Canvas>
  )
}

export default App
