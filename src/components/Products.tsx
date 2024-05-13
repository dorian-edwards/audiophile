import { ProductsProps } from '../config/dataTypes'
import ProductLink from './ProductLink'

export default function Products({ products }: ProductsProps) {
  return (
    <div className='container'>
      <ul>
        {products.map((productDetails, i) => (
          <li key={i}>
            <ProductLink productDetails={productDetails} index={i} />
          </li>
        ))}
      </ul>
    </div>
  )
}
