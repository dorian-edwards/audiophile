import Button from '../formElements/Button'
import Counter from '../formElements/Counter'
import ProductLayout from '../layouts/ProductLayout'

export default function ProductPage() {
  return (
    <ProductLayout>
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
        <SimilarItems />
      </div>
    </ProductLayout>
  )
}

export function ProductImage() {
  return (
    <div className='product-image__img-wrapper w-full bg-cover bg-center bg-no-repeat bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg)] aspect-square tablet2:pb-0 shrink-0 tablet2:max-w-[28rem] mb-[3.2rem] tablet2:mb-0 tablet2:aspect-[281/480] desktop2:max-w-[54rem] desktop2:aspect-[27/28] mx-auto' />
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

export function SimilarItems() {
  return (
    <section className='mb-[12rem] desktop2:mb-[16rem]'>
      <h2 className='similar-items__heading text-center text-section-heading uppercase mb-[4rem]'>
        You may also like
      </h2>
      <div className='w-full flex flex-col gap-y-[5.6rem] tablet2:flex-row tablet2:gap-x-[1rem] desktop2:gap-x-[3rem]'>
        <ProductLinkCard />
        <ProductLinkCard />
        <ProductLinkCard />
      </div>
    </section>
  )
}

export function ProductLinkCard() {
  return (
    <div className='w-full'>
      <div className='w-full flex-grow aspect-[327/120] tablet2:aspect-[223/318] desktop2:aspect-[350/318] bg-cover bg-center bg-no-repeat bg-anti-flash-white bg-[url(./images/shared/mobile/image-xx99-mark-two-headphones.jpg)] tablet2:bg-[url(./images/shared/tablet/image-xx99-mark-two-headphones.jpg)] desktop2:bg-[url(./images/shared/desktop/image-xx99-mark-two-headphones.jpg)] mb-[3.2rem]' />
      <h3 className='text-reg text-center uppercase mb-[3.2rem]'>
        XX99 mark ii
      </h3>
      <Button
        variant={1}
        className='max-w-[16.4rem] mx-auto
      '
      >
        See product
      </Button>
    </div>
  )
}
