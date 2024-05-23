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
    <>
      <ScrollToTop />
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </>
    // </Canvas>
  )
}

export default App
