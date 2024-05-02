import BaseLayout from './components/layouts/BaseLayout'
import CategoryPage from './components/pages/CategoryPage'
// import HomePage from './components/pages/Homepage'

function App() {
  return (
    // <Canvas lightMode={true}>
    <BaseLayout>
      <CategoryPage />
    </BaseLayout>
    // </Canvas>
  )
}

export default App
