import Text from '../text/Text'
import Button from '../formElements/Button'
import { DISPLAY_MODE } from '../../dataTypes'

export default function Product({
  displayMode,
}: {
  displayMode: DISPLAY_MODE
}) {
  return (
    <section
      id='header-product'
      className={
        HeaderProductStyle[displayMode] + ' mb-[5rem] tablet:mb-[10rem]'
      }
    >
      <div
        className={`content-container max-w-[111rem] mx-auto ${
          displayMode === DISPLAY_MODE.DESKTOP
            ? 'bg-[url(./images/home/desktop/image-header.jpg)] bg-cover bg-bottom bg-no-repeat pt-[12.8rem] pb-[15.8rem]'
            : ''
        }`}
      >
        <div
          id='header-info'
          className={`${HeaderInfoStyle[displayMode]} + ${
            displayMode === DISPLAY_MODE.DESKTOP ? 'pr-[1.065rem]' : ''
          }`}
        >
          <Text type='overline' className='!text-gray mb-[1.6rem]'>
            New Product
          </Text>
          <Text type='h1Mobile' className='text-white mb-[2.4rem]'>
            XX99 Mark II Headphones
          </Text>
          <Text type='body' className='!text-silver mb-[2.8rem]'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
          <Button
            variant={1}
            sx={{
              maxWidth: '16rem',
              fontSize: '1.3rem',
              padding: '1.5rem 2rem',
            }}
          >
            See Product
          </Button>
        </div>
      </div>
    </section>
  )
}

const HeaderProductStyle: { [key in DISPLAY_MODE]: string } = {
  [DISPLAY_MODE.MOBILE]:
    'text-center pt-[10.8rem] pb-[11.2rem] px-[2.4rem] bg-black bg-[url(./images/home/mobile/image-header.jpg)] bg-cover bg-no-repeat bg-bottom',
  [DISPLAY_MODE.TABLET]:
    'text-center pt-[12.6rem] pb-[16.7rem] px-[2.4rem] bg-black bg-[url(./images/home/tablet/image-header.jpg)] bg-[length:calc(100vw*0.063_+_643px)] bg-no-repeat bg-bottom',
  [DISPLAY_MODE.DESKTOP]: 'px-[2.4rem] bg-black mx-auto',
}

const HeaderInfoStyle: { [key in DISPLAY_MODE]: string } = {
  [DISPLAY_MODE.MOBILE]: '',
  [DISPLAY_MODE.TABLET]: 'max-w-[38rem] mx-auto',
  [DISPLAY_MODE.DESKTOP]: 'max-w-[38rem]',
}
