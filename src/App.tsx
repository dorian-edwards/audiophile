import Canvas from './Canvas'
import PagePreview from './components/PagePreviewCard'

function App() {
  return (
    <Canvas lightMode={true}>
      <div className='container max-w-[111rem] mx-auto'>
        <PagePreview />
      </div>
    </Canvas>
  )
}

export default App
