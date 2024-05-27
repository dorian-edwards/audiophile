import { useNavigate, useParams } from 'react-router-dom'
import ImageCollage from '../ImageCollage'
import ProductDetails from '../ProductDetails'
import ProductFeatures from '../ProductFeatures'
import ProductImage from '../ProductImage'
import ProductInventory from '../ProductInventory'
import SimilarItems from '../SimilarItems'
import ProductLayout from '../layouts/ProductLayout'
import { useProductDataContext } from '../../contexts/AppData'

export default function ProductPage() {
  const navigate = useNavigate()
  const { product } = useParams()
  const data = useProductDataContext()

  const productObj = data[product as string]
  console.log(productObj)

  return (
    <ProductLayout>
      <section className='product container pt-[10rem]'>
        <div className='tablet2:flex gap-x-[7rem] tablet2:mb-[12rem] tablet2:h-[48rem] desktop2:h-[56rem] desktop2:mb-[16rem]'>
          <ProductImage primaryImage={productObj.primaryImage} />
          <ProductDetails
            model={productObj.model}
            productType={productObj.productType}
            newProduct={productObj.newProduct}
            description={productObj.description}
            price={productObj.price}
          />
        </div>
        <div className='desktop2:flex gap-x-[12.5rem] desktop2:mb-[7.2rem]'>
          <ProductFeatures features={productObj.features} />
          <ProductInventory inventory={productObj.inventory} />
        </div>
        <ImageCollage
          images={[
            productObj.collageImg1,
            productObj.collageImg2,
            productObj.collageImg3,
          ]}
        />
        <SimilarItems />
      </section>
    </ProductLayout>
  )
}
