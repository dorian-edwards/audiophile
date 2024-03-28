import Text from '../text/Text'
import Button from '../formElements/Button'

export default function Product({ variant }: { variant: string }) {
  return (
    <section id='header-product' className={HeaderProductStyle[variant]}>
      <div
        className={`content-container max-w-[111rem] mx-auto ${
          variant === 'desktop'
            ? 'bg-[url(./images/home/desktop/image-header.jpg)] bg-cover bg-bottom bg-no-repeat pt-[12.8rem] pb-[15.8rem]'
            : ''
        }`}
      >
        <div
          id='header-info'
          className={`${HeaderInfoStyle[variant]} + ${
            variant === 'desktop' ? 'pr-[1.065rem]' : ''
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

const HeaderProductStyle: { [key: string]: string } = {
  mobile:
    'text-center pt-[10.8rem] pb-[11.2rem] px-[2.4rem] bg-black bg-[url(./images/home/mobile/image-header.jpg)] bg-cover bg-no-repeat bg-bottom',
  tablet:
    'text-center pt-[12.6rem] pb-[16.7rem] px-[2.4rem] bg-black bg-[url(./images/home/tablet/image-header.jpg)] bg-[length:calc(100vw*0.063_+_643px)] bg-no-repeat bg-bottom',
  desktop: 'px-[2.4rem] bg-black mx-auto',
}

const HeaderInfoStyle: { [key: string]: string } = {
  mobile: '',
  tablet: 'max-w-[38rem] mx-auto',
  desktop: 'max-w-[38rem]',
}
