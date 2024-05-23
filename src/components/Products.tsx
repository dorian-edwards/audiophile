import { ProductsProps } from '../config/dataTypes'
import ProductLink from './ProductLink'

export default function Products({ products }: ProductsProps) {
  return (
    <div className='container max-w-[76.8rem] desktop2:max-w-[111rem]'>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <ProductLink product={product} index={i} />
          </li>
        ))}
      </ul>
    </div>
  )
}
