import { CATEGORY } from '../dataTypes'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <section className='product-categories container flex flex-col justify-center items-center desktop:items-baseline desktop:flex-row  gap-y-[10rem] gap-x-[1rem] mb-[16rem] tablet:mb-[16.8rem]'>
      <CategoryCard type={CATEGORY.HEADPHONES} />
      <CategoryCard type={CATEGORY.SPEAKERS} />
      <CategoryCard type={CATEGORY.EARBUDS} />
    </section>
  )
}
