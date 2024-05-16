import Button from './formElements/Button'
import Text from './text/Text'

export default function PagePreviewZX7() {
  return (
    <div className='w-full py-[10rem] pl-[2.4rem] tablet2:pl-[4rem] rounded-[0.8rem] bg-no-repeat bg-cover bg-[url(./images/home/mobile/image-speaker-zx7.jpg)] bg-center tablet:bg-[url(./images/home/tablet/image-speaker-zx7.jpg)] tablet:bg-[position:-10px_0px] desktop:bg-[url(./images/home/desktop/image-speaker-zx7.jpg)] desktop:bg-[position:-19px_0px] min-[1296px]:bg-[position:-16px_0px]'>
      <div className='content'>
        <Text
          type='h2Mobile'
          sx={{ marginBottom: '3.4rem', letterSpacing: 2, fontSize: '2.8rem' }}
        >
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
