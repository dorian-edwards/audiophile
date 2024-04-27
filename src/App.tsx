import Footer from './components/Footer'
import Header from './components/header/Header'
import HomePage from './components/pages/Homepage'

function App() {
  return (
    // <Canvas lightMode={true}>
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
    // </Canvas>
  )
}

export default App
