import { ProductsProps } from '../dataTypes'
import ProductLink from './ProductLink'

export default function Products({ products }: ProductsProps) {
  return (
    <ul>
      {products.map((productDetails, i) => (
        <li key={i}>
          <ProductLink productDetails={productDetails} index={i} />
        </li>
      ))}
    </ul>
  )
}
