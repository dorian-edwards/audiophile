import { DISPLAY_MODE, PagePreviewStyles } from '../dataTypes'
import useScreenMonitor from '../hooks/useScreenMonitor'
import Button from './formElements/Button'
import Text from './text/Text'

export default function PagePreviewZX9() {
  const display = useScreenMonitor()
  const {
    className,
    contentWrapperStyling,
    titleTextType,
    titleTextStyle,
    bodyTextStyle,
  } = pagePreviewZX9Props[display]

  return (
    <div className={className}>
      <div className={contentWrapperStyling}>
        <div className='category-page-preview-card-title-wrapper mb-[2.4rem]'>
          <Text type={titleTextType} sx={titleTextStyle}>
            ZX9
          </Text>
          <Text type={titleTextType} sx={titleTextStyle}>
            speaker
          </Text>
        </div>
        <Text type='body' sx={bodyTextStyle}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
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
    </div>
  )
}

const pagePreviewZX9Props: PagePreviewStyles = {
  [DISPLAY_MODE.DESKTOP]: {
    className:
      'category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[13.3rem] pb-[12.4rem] bg-no-repeat bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:32.7%,_900px] bg-[position:left_90px_bottom_-10px,_left_-200px_bottom_-302px]',
    contentWrapperStyling:
      'category-page-preview-card_text w-full max-w-[35rem] ml-auto',
    titleTextType: 'h1',
    titleTextStyle: { color: 'white', marginBottom: '2.4rem' },
    bodyTextStyle: undefined,
  },
  [DISPLAY_MODE.TABLET]: {
    className:
      'category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/tablet/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_840px] bg-[position:right_50%_top_12%,_center_bottom_56px]',
    contentWrapperStyling:
      'category-page-preview-card_text w-full max-w-[34rem] mx-auto',
    titleTextType: 'h1',
    titleTextStyle: {
      color: 'white',
      marginBottom: '2.4rem',
      textAlign: 'center',
    },
    bodyTextStyle: { marginBottom: '2.4rem', textAlign: 'center' },
  },
  [DISPLAY_MODE.MOBILE]: {
    className:
      'category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/mobile/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_550px] bg-[position:right_50%_top_17%,_center_bottom_168px]',
    contentWrapperStyling:
      'category-page-preview-card_text w-full max-w-[34rem] mx-auto',
    titleTextType: 'h2Mobile',
    titleTextStyle: {
      color: 'white',
      textAlign: 'center',
    },
    bodyTextStyle: { marginBottom: '2.4rem', textAlign: 'center' },
  },
}
