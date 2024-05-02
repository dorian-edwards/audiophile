import { useState } from 'react'
import About from '../About'
import Categories from '../Categories'
import Button from '../formElements/Button'
import Text from '../text/Text'

export default function CategoryPage() {
  return (
    <>
      <CategoryHeader />
      <div className='container'>
        <Products />
        <Categories />
        <About />
      </div>
    </>
  )
}

export function CategoryHeader() {
  // top portion of page with category title
  return (
    <section className='product-title bg-black py-[3.2rem] mb-[6.4rem] tablet:mb-[12rem] tablet:pt-[10.5rem] tablet:pb-[9.8rem]'>
      <h1 className='text-med tablet:text-xl text-white text-center uppercase'>
        Placeholder
      </h1>
    </section>
  )
}

export function Products() {
  return (
    <div className=''>
      <ProductLink />
      <ProductLink />
      <ProductLink />
    </div>
  )
}

export function ProductLink() {
  const [index, setIndex] = useState(0)

  return (
    <div className='product-link mb-[12rem] min-[1100px]:flex'>
      <div
        className={`product-link__img min-[1100px]:w-[54rem] min-[1100px]:mb-0 min-[1100px]:h-[56rem] bg-cover bg-center bg-no-repeat bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg)]  h-[352px] mb-[3.2rem] tablet:mb-[5.2rem] shrink-0 ${
          index % 2 === 0 ? 'min-[1100px]:order-1' : ''
        }`}
      />
      <div
        className={`product-link__text ${
          index % 2 === 0
            ? 'min-[1100px]:pr-[12.5rem]'
            : 'min-[1100px]:pl-[12.5rem]'
        } flex items-center justify-center`}
      >
        <div className='product-link__text-wrapper'>
          <p className='text-overline text-caramel text-center min-[1100px]:text-left uppercase mb-[2.4rem] tablet:mb-[1.6rem]'>
            new product
          </p>
          <h2 className='text-product-link tablet:text-xl text-center min-[1100px]:text-left  uppercase mb-[2.4rem] tablet:mb-[3.2rem]'>
            XX99 Mark II
            <br />
            Headphones
          </h2>
          <p className='text-body text-center min-[1100px]:text-left  text-med-gray mb-[2.4rem] max-w-[57.2rem] mx-auto'>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Button
            variant={1}
            className='max-w-[16.4rem] mx-auto min-[1100px]:mx-0 '
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}
