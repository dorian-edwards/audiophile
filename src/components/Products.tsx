import { ProductsProps } from '../config/dataTypes'
import ProductLink from './ProductLink'

export default function Products({ products }: ProductsProps) {
  return (
    <div className='container'>
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
