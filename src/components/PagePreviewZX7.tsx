import Button from './formElements/Button'
import Text from './text/Text'
import { DISPLAY_MODE, PagePreviewStyles } from '../dataTypes'
import useScreenMonitor from '../hooks/useScreenMonitor'

export function PagePreviewZX7() {
  const display = useScreenMonitor()
  const { className, titleTextType, titleTextStyle } =
    pagePreviewZX7Styles[display]
  return (
    <div className={className + ' rounded-[0.8rem]'}>
      <div className='content'>
        <Text type={titleTextType} sx={titleTextStyle}>
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

const pagePreviewZX7Styles: PagePreviewStyles = {
  [DISPLAY_MODE.MOBILE]: {
    className:
      'w-[90%] mx-auto py-[10rem] pl-[2.4rem] bg-center bg-no-repeat bg-cover bg-[url(./images/home/mobile/image-speaker-zx7.jpg)]',
    contentWrapperStyling: '',
    titleTextType: 'h2Mobile',
    titleTextStyle: {
      color: '#000',
      marginBottom: '3.4rem',
      letterSpacing: '2px',
      fontSize: '2.8rem',
    },
    bodyTextStyle: undefined,
  },
  [DISPLAY_MODE.TABLET]: {
    className:
      'w-[90%] mx-auto py-[10rem] pl-[2.4rem] bg-[position:-80px_0px] bg-no-repeat bg-cover bg-[url(./images/home/tablet/image-speaker-zx7.jpg)]',
    contentWrapperStyling: '',
    titleTextType: 'h2Mobile',
    titleTextStyle: {
      color: '#000',
      marginBottom: '3.4rem',
      letterSpacing: '2px',
      fontSize: '2.8rem',
    },
    bodyTextStyle: undefined,
  },
  [DISPLAY_MODE.DESKTOP]: {
    className:
      'w-[90%] mx-auto py-[10rem] pl-[2.4rem] bg-[position:-130px_0px] bg-no-repeat bg-cover bg-[url(./images/home/desktop/image-speaker-zx7.jpg)]',
    contentWrapperStyling: '',
    titleTextType: 'h2Mobile',
    titleTextStyle: {
      color: '#000',
      marginBottom: '3.4rem',
      letterSpacing: '2px',
      fontSize: '2.8rem',
    },
    bodyTextStyle: undefined,
  },
}
