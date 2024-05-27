import { ProductDetailProps } from '../config/dataTypes'
import Button from './formElements/Button'
import Counter from './formElements/Counter'

export default function ProductDetails({
  model,
  productType,
  newProduct,
  description,
  price,
}: ProductDetailProps) {
  return (
    <section className='product-details mb-[8.8rem] tablet2:flex tablet2:flex-col justify-center tablet2:mb-0'>
      <div className=''>
        {newProduct ? (
          <p className='product-details__highlight text-overline text-caramel uppercase mb-[2.4rem] tablet2:mb-[1.8rem]'>
            new product
          </p>
        ) : null}
        <h1 className='product-details__title text-product-title uppercase mb-[2.4rem] tablet2:mb-[3.2rem]'>
          {model} <br />
          {productType}
        </h1>
        <p className='product-details__description text-body text-med-gray mb-[2.4rem]  tablet2:mb-[3.2rem]'>
          {description}
        </p>
        <p className='product-details__price text-product-price mb-[3.2rem]'>
          {price}
        </p>
        <div className='product-details__purchase-quantity flex gap-x-[1.6rem] flex-wrap gap-y-[1.6rem] '>
          <Counter />
          <Button variant={1} sx={{ fontWeight: '500', maxWidth: '16.6rem' }}>
            add product
          </Button>
        </div>
      </div>
    </section>
  )
}
