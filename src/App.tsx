import BaseLayout from './components/layouts/BaseLayout'
import HomePage from './components/pages/Homepage'

function App() {
  return (
    // <Canvas lightMode={true}>
    <BaseLayout>
      <HomePage />
    </BaseLayout>
    // </Canvas>
  )
}

export default App
