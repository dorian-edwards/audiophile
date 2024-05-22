import { useNavigate, useParams } from 'react-router-dom'
import CategoryHeader from '../CategoryHeader'
import ProductLayout from '../layouts/ProductLayout'
import { useProductDataContext } from '../../contexts/AppData'
import { useEffect, useState } from 'react'
import { Product } from '../../config/dataTypes'
import Products from '../Products'

export default function CategoryPage() {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()
  const { category } = useParams()
  const data = useProductDataContext()

  useEffect(() => {
    const results = Object.values(data).filter(
      (obj) => obj.category === category
    )
    if (results.length === 0) navigate('/')
    setProducts(results)
  }, [category, data, navigate])

  return (
    <ProductLayout>
      <CategoryHeader title={category || ''} />
      <Products products={products} />
    </ProductLayout>
  )
}
