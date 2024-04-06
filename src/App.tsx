import Canvas from './Canvas'
import Button from './components/formElements/Button'
import Text from './components/text/Text'

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
//   return (
//     <div className='w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/mobile/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_550px] bg-[position:right_50%_top_17%,_center_bottom_168px]'>
//       <Text type='h2Mobile' sx={{ color: 'white', textAlign: 'center' }}>
//         ZX9
//       </Text>
//       <Text
//         type='h2Mobile'
//         sx={{ color: 'white', marginBottom: '2.4rem', textAlign: 'center' }}
//       >
//         speaker
//       </Text>
//       <Text type='body' sx={{ marginBottom: '2.4rem', textAlign: 'center' }}>
//         Upgrade to premium speakers that are phenomenally built to deliver truly
//         remarkable sound.
//       </Text>
//       <Button
//         variant={2}
//         sx={{
//           backgroundColor: '#000',
//           color: '#FFF',
//           display: 'block',
//           margin: '0 auto',
//         }}
//       >
//         see product
//       </Button>
//     </div>
//   )
// }

// tablet
// export function PagePreview() {
//   return (
//     <div className='category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[29.4rem] pb-[5.5rem] bg-no-repeat bg-[url(./images/home/tablet/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:150px,_840px] bg-[position:right_50%_top_12%,_center_bottom_56px]'>
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
export function PagePreview() {
  return (
    <div className='category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[13.3rem] pb-[12.4rem] bg-no-repeat bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:360px,_900px] bg-[position:left_90px_bottom_-10px,_left_-174px_bottom_-302px]'>
      <div className='category-page-preview-card_text w-full max-w-[35rem] ml-auto'>
        <Text type='h1' sx={{ color: 'white' }}>
          ZX9
        </Text>
        <Text type='h1' sx={{ color: 'white', marginBottom: '2.4rem' }}>
          speaker
        </Text>
        <Text type='body' sx={{ marginBottom: '2.4rem' }}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button
          variant={2}
          sx={{
            backgroundColor: '#000',
            color: '#FFF',
            display: 'block',

            maxWidth: '18rem',
          }}
        >
          see product
        </Button>
      </div>
    </div>
  )
}

/*
.bg-\[position\:right_50\%_top_12\%\2c _center_bottom_56px\] {
    background-position: left 91px bottom -9px, left -174px bottom -302px;
}
*/
