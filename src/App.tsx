import CategoryCard from './components/CategoryCard'
import { PagePreviewZX7 } from './components/PagePreviewZX7'
import PagePreviewZX9 from './components/PagePreviewZX9'
import Button from './components/formElements/Button'
import Header from './components/header/Header'
import Text from './components/text/Text'
import { CATEGORY } from './dataTypes'

function App() {
  return (
    // <Canvas lightMode={true}>
    <>
      <Header />
      <div className='container max-w-[111rem] mx-auto flex flex-col gap-y-[2.4rem]'>
        <div className='w-[90%] mx-auto flex flex-col justify-center items-center desktop:items-baseline desktop:flex-row  gap-y-[10rem] gap-x-[1rem] mb-[10rem] tablet:mb-[16.8rem]'>
          <CategoryCard type={CATEGORY.HEADPHONES} />
          <CategoryCard type={CATEGORY.SPEAKERS} />
          <CategoryCard type={CATEGORY.EARBUDS} />
        </div>
        <PagePreviewZX9 />
        <PagePreviewZX7 />
        <PagePreviewYX1 />
      </div>
    </>
    // </Canvas>
  )
}

export default App

export function PagePreviewYX1() {
  return (
    <div className='yx1-card w-[90%] max-w-[111rem] mx-auto flex flex-col gap-y-[2.4rem] gap-x-[1rem] tablet:flex-row'>
      <div className='yx1-card__img h-[20rem] tablet:h-[32rem] bg-[url(./images/home/mobile/image-earphones-yx1.jpg)] bg-cover bg-center tablet:bg-[url(./images/home/tablet/image-earphones-yx1.jpg)] desktop:bg-[url(./images/home/desktop/image-earphones-yx1.jpg)] w-full rounded-[0.8rem]' />
      <div className='yx1-card__content w-full bg-anti-flash-white rounded-[0.8rem] pl-[2.4rem] min-[564px]:pl-[4rem] min-[1000px]:pl-[9rem] py-[4rem] tablet:py-0 pr-[5rem] tablet:flex tablet:items-center'>
        <div className='content-wrapper'>
          <Text
            type='h2Mobile'
            sx={{
              fontSize: '2.8rem',
              letterSpacing: '2px',
              marginBottom: '3.2rem',
            }}
          >
            YX1 earphones
          </Text>
          <Button
            variant={2}
            sx={{ maxWidth: '16.5rem', backgroundColor: 'transparent' }}
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  )
}
