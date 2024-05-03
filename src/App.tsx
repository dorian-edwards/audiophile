import BaseLayout from './components/layouts/BaseLayout'
import CategoryPage from './components/pages/CategoryPage'
// import HomePage from './components/pages/Homepage'

import appData from './appData.json'

function App() {
  return (
    // <Canvas lightMode={true}>
    <BaseLayout>
      <CategoryPage productCategory={appData.headphones} />
    </BaseLayout>
    // </Canvas>
  )
}

export default App
