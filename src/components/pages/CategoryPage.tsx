import CategoryHeader from '../CategoryHeader'
import Products from '../Products'
import { CategoryPageProps } from '../../dataTypes'
import ProductLayout from '../layouts/ProductLayout'

export default function CategoryPage({
  productCategory: { title, products },
}: CategoryPageProps) {
  return (
    <ProductLayout>
      <CategoryHeader title={title} />
      <Products products={products} />
    </ProductLayout>
  )
}
