import ProductHighlightYX1 from './ProductHighlightYX1'
import ProductHighlightZX7 from './ProductHighlightZX7'
import ProductHighlightZX9 from './ProductHighlightZX9'

export default function ProductHighlights() {
  return (
    <section className='product-highlights mb-[12rem] tablet:mb-[9.6rem] desktop:mb-[20rem] flex flex-col gap-y-[2.4rem]'>
      <ProductHighlightZX9 />
      <ProductHighlightZX7 />
      <ProductHighlightYX1 />
    </section>
  )
}
