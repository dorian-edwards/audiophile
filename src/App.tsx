import Canvas from './Canvas'
import Button from './components/formElements/Button'
import Text from './components/text/Text'
import { DISPLAY_MODE } from './dataTypes'
import useScreenMonitor from './hooks/useScreenMonitor'

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

//mobile
// export function PagePreview() {
//   const display = useScreenMonitor()

//   return (
//     <div className='category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/mobile/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_550px] bg-[position:right_50%_top_17%,_center_bottom_168px]'>
//       <div className='category-page-preview-card_text w-full max-w-[34rem] mx-auto'>
//         <Text type='h2Mobile' sx={{ color: 'white', textAlign: 'center' }}>
//           ZX9
//         </Text>
//         <Text
//           type='h2Mobile'
//           sx={{ color: 'white', marginBottom: '2.4rem', textAlign: 'center' }}
//         >
//           speaker
//         </Text>
//         <Text type='body' sx={{ marginBottom: '2.4rem', textAlign: 'center' }}>
//           Upgrade to premium speakers that are phenomenally built to deliver
//           truly remarkable sound.
//         </Text>
//         <Button
//           variant={2}
//           sx={{
//             backgroundColor: '#000',
//             color: '#FFF',
//             display: 'block',
//             margin: '0 auto',
//           }}
//         >
//           see product
//         </Button>
//       </div>
//     </div>
//   )
// }

// tablet
// export function PagePreview() {
//   return (
//     <div className='category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/tablet/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_840px] bg-[position:right_50%_top_12%,_center_bottom_56px]'>
//       <div className='category-page-preview-card_text w-full max-w-[34rem] mx-auto'>
//         <Text type='h1' sx={{ color: 'white', textAlign: 'center' }}>
//           ZX9
//         </Text>
//         <Text
//           type='h1'
//           sx={{ color: 'white', marginBottom: '2.4rem', textAlign: 'center' }}
//         >
//           speaker
//         </Text>
//         <Text type='body' sx={{ marginBottom: '2.4rem', textAlign: 'center' }}>
//           Upgrade to premium speakers that are phenomenally built to deliver
//           truly remarkable sound.
//         </Text>
//         <Button
//           variant={2}
//           sx={{
//             backgroundColor: '#000',
//             color: '#FFF',
//             display: 'block',
//             margin: '0 auto',
//             maxWidth: '18rem',
//           }}
//         >
//           see product
//         </Button>
//       </div>
//     </div>
//   )
// }

// desktop
// export function PagePreview() {
//   return (
//     <div className='category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[13.3rem] pb-[12.4rem] bg-no-repeat bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:360px,_900px] bg-[position:left_90px_bottom_-10px,_left_-174px_bottom_-302px]'>
//       <div className='category-page-preview-card_text w-full max-w-[35rem] ml-auto'>
//         <Text type='h1' sx={{ color: 'white' }}>
//           ZX9
//         </Text>
//         <Text type='h1' sx={{ color: 'white', marginBottom: '2.4rem' }}>
//           speaker
//         </Text>
//         <Text type='body' sx={{ marginBottom: '2.4rem' }}>
//           Upgrade to premium speakers that are phenomenally built to deliver
//           truly remarkable sound.
//         </Text>
//         <Button
//           variant={2}
//           sx={{
//             backgroundColor: '#000',
//             color: '#FFF',
//             display: 'block',

//             maxWidth: '18rem',
//           }}
//         >
//           see product
//         </Button>
//       </div>
//     </div>
//   )
// }

type PagePreviewProps = {
  [key in DISPLAY_MODE]: {
    className: string
    contentWrapperStyling: string
    titleTextType: string
    titleTextStyle: React.CSSProperties | undefined
    bodyTextStyle: React.CSSProperties | undefined
  }
}

const pagePreviewProps: PagePreviewProps = {
  [DISPLAY_MODE.DESKTOP]: {
    className:
      'category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[13.3rem] pb-[12.4rem] bg-no-repeat bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:32.7%,_900px] bg-[position:left_90px_bottom_-10px,_left_-174px_bottom_-302px]',
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

export function PagePreview() {
  const display = useScreenMonitor()
  const {
    className,
    contentWrapperStyling,
    titleTextType,
    titleTextStyle,
    bodyTextStyle,
  } = pagePreviewProps[display]

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
