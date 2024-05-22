import ImageCollage from '../ImageCollage'
import ProductDetails from '../ProductDetails'
import ProductFeatures from '../ProductFeatures'
import ProductImage from '../ProductImage'
import ProductInventory from '../ProductInventory'
import SimilarItems from '../SimilarItems'
import ProductLayout from '../layouts/ProductLayout'

export default function ProductPage() {
  return (
    <ProductLayout>
      <section className='product container pt-[10rem]'>
        <div className='tablet2:flex gap-x-[7rem] tablet2:mb-[12rem] tablet2:h-[48rem] desktop2:h-[56rem] desktop2:mb-[16rem]'>
          <ProductImage />
          <ProductDetails />
        </div>
        <div className='desktop2:flex gap-x-[12.5rem] desktop2:mb-[7.2rem]'>
          <ProductFeatures />
          <ProductInventory />
        </div>
        <ImageCollage />
        <SimilarItems />
      </section>
    </ProductLayout>
  )
}
