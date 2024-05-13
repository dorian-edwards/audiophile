export default function ImageCollage() {
  return (
    <section className='collage flex flex-col gap-y-[2.4rem] tablet2:flex-row tablet2:gap-x-[1.8rem] mb-[12rem]'>
      <div className=' flex flex-col gap-y-[2.4rem] tablet2:w-[40%] justify-between'>
        <div className='img-1 rounded-[0.8rem] aspect-[109/58] bg-no-repeat bg-center bg-cover bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg)] tablet2:aspect-[277/184] desktop2:aspect-[277/184]' />
        <div className='img-2 rounded-[0.8rem] aspect-[109/58] bg-no-repeat bg-center bg-cover bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg)] tablet2:aspect-[277/184] desktop2:aspect-[277/184]' />
      </div>
      <div className='img-3 rounded-[0.8rem] aspect-[327/368] bg-no-repeat bg-center bg-cover bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg)] tablet2:w-[60%] tablet2:aspect-[395/368]' />
    </section>
  )
}
