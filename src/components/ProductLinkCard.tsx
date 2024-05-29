import { Link } from 'react-router-dom'
import { useProductDataContext } from '../contexts/AppData'
import Button from './formElements/Button'

export default function ProductLinkCard({
  productName,
}: {
  productName: string
}) {
  const data = useProductDataContext()
  const product = data[productName]

  return (
    <div className='w-full'>
      <div
        className={`w-full flex-grow aspect-[327/120] tablet2:aspect-[223/318] desktop2:aspect-[350/318] bg-cover bg-center bg-no-repeat bg-anti-flash-white ${product.cardImage} mb-[3.2rem] max-w-[60rem] mx-auto`}
      />
      <h3 className='text-reg text-center uppercase mb-[3.2rem]'>
        {product.model}
      </h3>
      <Link to={`/products/${product.link}`}>
        <Button variant={1} className='mx-auto max-w-[16.4rem]'>
          See product
        </Button>
      </Link>
    </div>
  )
}
