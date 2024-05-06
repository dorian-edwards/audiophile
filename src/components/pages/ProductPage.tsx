import pic from '../../images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import Button from '../formElements/Button'
import Counter from '../formElements/Counter'

export default function ProductPage() {
  return (
    <div className='container'>
      <ProductImage />
      <ProductDetails />
      <ProductFeatures />
      <Inventory />
    </div>
  )
}

export function ProductImage() {
  return (
    <div className='product-image__img-wrapper w-full max-w-[48rem] bg-cover bg-center bg-no-repeat bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg)] aspect-square mx-auto min-[768px]:pb-0 min-[768px]:h-[40.8rem] min-[768px]:max-w-[28rem] min-[768px]:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-product.jpg)] mb-[3.2rem]' />
  )
}

export function ProductDetails() {
  return (
    <section className='product-details'>
      <p className='product-details__highlight text-overline text-caramel uppercase mb-[2.4rem]'>
        new product
      </p>
      <h1 className='product-details__title text-product-title uppercase mb-[2.4rem]'>
        x99 mark ii <br />
        headphones
      </h1>
      <p className='product-details__description text-body text-med-gray mb-[2.4rem]'>
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </p>
      <p className='product-details__price text-product-price mb-[3.2rem]'>
        $ 2,999
      </p>
      <div className='product-details__purchase-quantity flex gap-x-[1.6rem] mb-[8.8rem]'>
        <Counter />
        <Button variant={1} sx={{ fontWeight: '500', maxWidth: '16.6rem' }}>
          add product
        </Button>
      </div>
    </section>
  )
}

export function ProductFeatures() {
  return (
    <div className='product-features mb-[8.8rem]'>
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
    <section className='product-inventory mb-[8.8rem]'>
      <h2 className='text-section-heading uppercase mb-[2.4rem]'>in the box</h2>
      <ul>
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
      <p className='quantity w-[15%] text-body text-caramel font-bold'>1x</p>
      <p className='item w-[85%] text-body text-med-gray capitalize'>
        headphone unit
      </p>
    </div>
  )
}
