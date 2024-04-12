import Canvas from './Canvas'
import Button from './components/formElements/Button'
import Text from './components/text/Text'

function App() {
  return (
    <Canvas lightMode={true}>
      <div className='container max-w-[111rem] mx-auto'>
        <PagePreview2 />
      </div>
    </Canvas>
  )
}

export default App

export function PagePreview2() {
  return (
    <div className='w-[90%] mx-auto py-[10rem] pl-[2.4rem] bg-no-repeat bg-cover bg-[url(./images/home/mobile/image-speaker-zx7.jpg)]'>
      <div className='content'>
        <Text
          type='h2Mobile'
          sx={{
            color: '#000',
            marginBottom: '3.4rem',
            letterSpacing: '2px',
            fontSize: '2.8rem',
          }}
        >
          ZX7 Speaker
        </Text>
        <Button
          variant={2}
          sx={{ maxWidth: '18rem', backgroundColor: 'transparent' }}
        >
          See product
        </Button>
      </div>
    </div>
  )
}
