import Canvas from './Canvas'
// import CategoryCard from './components/CategoryCard'
import Button from './components/formElements/Button'
import Text from './components/text/Text'
// import { CATEGORY } from './dataTypes'
import test from './images/home/mobile/image-speaker-zx9.png'

function App() {
  return (
    <Canvas lightMode={true}>
      {/* <div className='flex flex-col gap-y-[10rem]'>
        <CategoryCard type={CATEGORY.HEADPHONES} />
        <CategoryCard type={CATEGORY.SPEAKERS} />
        <CategoryCard type={CATEGORY.EARBUDS} />
      </div> */}
      <PagePreview />
    </Canvas>
  )
}

export default App

export function PagePreview() {
  return (
    <div className='w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/mobile/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_550px] bg-[position:right_50%_top_17%,_center_bottom_174px]'>
      <Text type='h2Mobile' sx={{ color: 'white', textAlign: 'center' }}>
        ZX9
      </Text>
      <Text
        type='h2Mobile'
        sx={{ color: 'white', marginBottom: '2.4rem', textAlign: 'center' }}
      >
        speaker
      </Text>
      <Text type='body' sx={{ marginBottom: '2.4rem', textAlign: 'center' }}>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </Text>
      <Button
        variant={2}
        sx={{
          backgroundColor: '#000',
          color: '#FFF',
          display: 'block',
          margin: '0 auto',
        }}
      >
        see product
      </Button>
    </div>
  )
}

//right 50% top 17%, center bottom 174px
