import { Outlet, useLocation } from 'react-router-dom'
import BaseLayout from './components/layouts/BaseLayout'
import { useEffect } from 'react'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    // <Canvas lightMode={true}>
    <div className='flex flex-col h-[100vh]'>
      <ScrollToTop />
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </div>
    // </Canvas>
  )
}

export default App
