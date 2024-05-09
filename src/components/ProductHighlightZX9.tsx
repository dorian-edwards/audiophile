import Button from './formElements/Button'
import Text from './text/Text'

export default function PagePreviewZX9() {
  return (
    <div className='category-page-preview-zx9 w-full bg-caramel px-[2.4rem] pt-[29.4rem] rounded-[0.8rem] min-[1110px]:pt-[13.3rem] pb-[5.5rem] min-[1110px]:pb-[12.4rem] bg-no-repeat bg-[url(./images/home/mobile/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_550px] bg-[position:right_50%_top_17%,_center_bottom_168px] tablet:bg-[[url(./images/home/tablet/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] tablet:bg-[size:150px,_840px] tablet:bg-[position:right_50%_top_12%,_center_bottom_56px] min-[1110px]:bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)]  min-[1110px]:bg-[size:375px,_900px] min-[1110px]:bg-[position:left_90px_bottom_-10px,_left_-180px_bottom_-282px]'>
      <div className='category-page-preview-zx9__text w-full max-w-[34rem] mx-auto min-[1110px]:max-w-[35rem] min-[1110px]:mx-0  min-[1110px]:ml-auto'>
        <div className='category-page-preview-card-title-wrapper mb-[2.4rem]'>
          <Text
            type='h1'
            className='min-[1110px]:!text-left'
            sx={{
              color: 'white',
              fontSize: '3.6rem',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '0.129rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            ZX9
          </Text>
          <Text
            type='h1'
            className='min-[1110px]:!text-left'
            sx={{
              color: 'white',
              fontSize: '3.6rem',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '0.129rem',
              textAlign: 'center',
            }}
          >
            speaker
          </Text>
        </div>
        <Text
          type='body'
          className='min-[1110px]:!text-left min-[1110px]:!mb-[4rem]'
          sx={{ textAlign: 'center', marginBottom: '2.4rem' }}
        >
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button
          variant={2}
          className='min-[1110px]:!mx-0 min-[1110px]:!mr-auto'
          sx={{
            backgroundColor: '#000',
            color: '#FFF',
            display: 'block',
            margin: '0 auto',
            maxWidth: '18rem',
          }}
        >
          see product
        </Button>
      </div>
    </div>
  )
}
