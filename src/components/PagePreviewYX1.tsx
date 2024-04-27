import Button from './formElements/Button'
import Text from './text/Text'

export function PagePreviewYX1() {
  return (
    <div className='yx1-card w-full flex flex-col gap-y-[2.4rem] gap-x-[1rem] tablet:flex-row'>
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
            sx={{
              maxWidth: '16.5rem',
              backgroundColor: 'transparent',
              fontSize: '1.2rem',
            }}
          >
            see product
          </Button>
        </div>
      </div>
    </div>
  )
}
