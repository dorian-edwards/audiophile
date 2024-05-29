import { Link } from 'react-router-dom'
import { ProductLinkProps } from '../config/dataTypes'
import Button from './formElements/Button'

export default function ProductLink({
  product: { model, category, primaryImage, description, link },
  index,
}: ProductLinkProps) {
  return (
    <div className='product-link mb-[12rem] min-[1110px]:flex min-[1110px]:mb-[16rem]'>
      <div
        className={`product-link__img min-[1110px]:w-[54rem] min-[1110px]:mb-0 min-[1110px]:h-[56rem] bg-anti-flash-white bg-[size:35.5rem] bg-center tablet2:bg-[center_bottom_-12rem] desktop2:bg-center bg-no-repeat ${primaryImage} h-[352px] mb-[3.2rem] tablet:mb-[5.2rem] shrink-0 ${
          index % 2 !== 0 ? 'min-[1110px]:order-1' : ''
        }`}
      />
      <div
        className={`product-link__text ${
          index % 2 !== 0
            ? 'min-[1110px]:pr-[12.5rem]'
            : 'min-[1110px]:pl-[12.5rem]'
        } flex items-center justify-center`}
      >
        <div className='product-link__text-wrapper'>
          {index === 0 ? (
            <p className='text-overline text-caramel text-center min-[1110px]:text-left uppercase mb-[2.4rem] tablet:mb-[1.6rem]'>
              new product
            </p>
          ) : null}
          <h2 className='text-product-title tablet:text-xl text-center min-[1110px]:text-left  uppercase mb-[2.4rem] tablet:mb-[3.2rem]'>
            {model}
            <br />
            {category}
          </h2>
          <p className='text-body text-center min-[1110px]:text-left  text-med-gray mb-[2.4rem] max-w-[57.2rem] mx-auto'>
            {description}
          </p>
          <Link to={`/products/${link}`}>
            <Button
              variant={1}
              className='!max-w-[16.4rem] mx-auto min-[1110px]:mx-0 hover:bg-atomic-tangerine'
            >
              See Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
