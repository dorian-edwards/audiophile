import Button from '../formElements/Button'
import Counter from '../formElements/Counter'

export default function ProductPage() {
  return (
    <div className='container pt-[10rem]'>
      <div className='tablet2:flex gap-x-[7rem] tablet2:mb-[12rem] tablet2:h-[48rem] desktop2:h-[56rem] desktop2:mb-[16rem]'>
        <ProductImage />
        <ProductDetails />
      </div>
      <div className='desktop2:flex gap-x-[12.5rem] desktop2:mb-[7.2rem]'>
        <ProductFeatures />
        <Inventory />
      </div>
      <Images />
    </div>
  )
}

export function ProductImage() {
  return (
    <div className='product-image__img-wrapper w-full bg-cover bg-center bg-no-repeat bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg)] aspect-square mx-auto tablet2:pb-0 shrink-0 tablet2:w-[48rem] tablet2:max-w-[28rem] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-product.jpg)] mb-[3.2rem] tablet2:mb-0 tablet2:aspect-auto desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg)] desktop2:w-[54rem] desktop2:max-w-[54rem] desktop2:aspect-[27/28] desktop2:h-[56rem]' />
  )
}

export function ProductDetails() {
  return (
    <section className='product-details mb-[8.8rem] tablet2:flex tablet2:flex-col justify-center tablet2:mb-0'>
      <div className=''>
        <p className='product-details__highlight text-overline text-caramel uppercase mb-[2.4rem] tablet2:mb-[1.8rem]'>
          new product
        </p>
        <h1 className='product-details__title text-product-title uppercase mb-[2.4rem] tablet2:mb-[3.2rem]'>
          x99 mark ii <br />
          headphones
        </h1>
        <p className='product-details__description text-body text-med-gray mb-[2.4rem]  tablet2:mb-[3.2rem]'>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p className='product-details__price text-product-price mb-[3.2rem]'>
          $ 2,999
        </p>
        <div className='product-details__purchase-quantity flex gap-x-[1.6rem] '>
          <Counter />
          <Button variant={1} sx={{ fontWeight: '500', maxWidth: '16.6rem' }}>
            add product
          </Button>
        </div>
      </div>
    </section>
  )
}

export function ProductFeatures() {
  return (
    <div className='product-features mb-[8.8rem] desktop2:max-w-[63.5rem]'>
      <h2 className='product-features__title text-section-heading uppercase mb-[2.4rem]'>
        features
      </h2>
      <p className='product-features__description text-body text-med-gray mb-[3.6rem]'>
        Featuring a genuine leather head strap and premium earcups, these
        headphones deliver superior comfort for those who like to enjoy endless
        listening. It includes intuitive controls designed for any situation.
        Whether you’re taking a business call or just in your own personal
        space, the auto on/off and pause features ensure that you’ll never miss
        a beat.
      </p>
      <p className='product-features__description text-body text-med-gray'>
        The advanced Active Noise Cancellation with built-in equalizer allow you
        to experience your audio world on your terms. It lets you enjoy your
        audio in peace, but quickly interact with your surroundings when you
        need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
        battery life, the XX99 Mark II headphones gives you superior sound,
        cutting-edge technology, and a modern design aesthetic.
      </p>
    </div>
  )
}

export function Inventory() {
  return (
    <section className='product-inventory mb-[8.8rem] tablet2:flex desktop2:flex-col desktop2:w-full'>
      <h2 className='text-section-heading uppercase mb-[2.4rem] tablet2:w-[45%] desktop2:w-full'>
        in the box
      </h2>
      <ul className='product-inventory__items tablet2:w-full flex flex-col gap-y-[0.8rem] tablet2:max-w-[35rem] desktop2:w-full'>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </section>
  )
}

export function Item() {
  return (
    <div className='item-inventory flex'>
      <p className='quantity w-[10%] text-body text-caramel font-bold'>1x</p>
      <p className='item w-[90%] text-body text-med-gray capitalize'>
        headphone unit
      </p>
    </div>
  )
}

export function Images() {
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
