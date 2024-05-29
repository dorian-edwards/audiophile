import { useNavigate, useParams } from 'react-router-dom'
import ImageCollage from '../ImageCollage'
import ProductDetails from '../ProductDetails'
import ProductFeatures from '../ProductFeatures'
import ProductImage from '../ProductImage'
import ProductInventory from '../ProductInventory'
import SimilarItems from '../SimilarItems'
import ProductLayout from '../layouts/ProductLayout'
import { useProductDataContext } from '../../contexts/AppData'
import { useEffect, useState } from 'react'
import { Product } from '../../config/dataTypes'

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const navigate = useNavigate()
  const { product } = useParams()
  const data = useProductDataContext()

  useEffect(() => {
    const productObj = data[product as string]
    if (!productObj) navigate('/')
    setSelectedProduct(productObj)
  }, [data, navigate, product])

  return (
    <>
      {selectedProduct ? (
        <ProductLayout>
          <section className='product container pt-[10rem]'>
            <div className='tablet2:flex gap-x-[7rem] tablet2:mb-[12rem] tablet2:h-[48rem] desktop2:h-[56rem] desktop2:mb-[16rem]'>
              <ProductImage primaryImage={selectedProduct.primaryImage} />
              <ProductDetails
                model={selectedProduct.model}
                productType={selectedProduct.productType}
                newProduct={selectedProduct.newProduct}
                description={selectedProduct.description}
                price={selectedProduct.price}
              />
            </div>
            <div className='desktop2:flex gap-x-[12.5rem] desktop2:mb-[7.2rem]'>
              <ProductFeatures features={selectedProduct.features} />
              <ProductInventory inventory={selectedProduct.inventory} />
            </div>
            <ImageCollage
              images={[
                selectedProduct.collageImg1,
                selectedProduct.collageImg2,
                selectedProduct.collageImg3,
              ]}
            />
            <SimilarItems relatedProducts={selectedProduct.relatedProducts} />
          </section>
        </ProductLayout>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}
