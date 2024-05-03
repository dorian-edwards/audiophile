import About from '../About'
import Categories from '../Categories'
import CategoryHeader from '../CategoryHeader'
import Products from '../Products'
import { CategoryPageProps } from '../../dataTypes'

export default function CategoryPage({
  productCategory: { title, products },
}: CategoryPageProps) {
  return (
    <>
      <CategoryHeader title={title} />
      <div className='container'>
        <Products products={products} />
        <Categories />
        <About />
      </div>
    </>
  )
}
