import Button from './formElements/Button'

export default function ProductLinkCard() {
  return (
    <div className='w-full'>
      <div className='w-full flex-grow aspect-[327/120] tablet2:aspect-[223/318] desktop2:aspect-[350/318] bg-cover bg-center bg-no-repeat bg-anti-flash-white bg-[url(./images/shared/mobile/image-xx99-mark-two-headphones.jpg)] tablet2:bg-[url(./images/shared/tablet/image-xx99-mark-two-headphones.jpg)] desktop2:bg-[url(./images/shared/desktop/image-xx99-mark-two-headphones.jpg)] mb-[3.2rem] max-w-[60rem] mx-auto' />
      <h3 className='text-reg text-center uppercase mb-[3.2rem]'>
        XX99 mark ii
      </h3>
      <Button variant={1} className='mx-auto'>
        See product
      </Button>
    </div>
  )
}
