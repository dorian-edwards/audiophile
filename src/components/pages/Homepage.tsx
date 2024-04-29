import useScreenMonitor from '../../hooks/useScreenMonitor'
import About from '../About'
import Categories from '../Categories'
import ProductHighlights from '../ProductHighlights'

import Product from '../header/Product'

export default function HomePage() {
  let mode = useScreenMonitor()
  return (
    <>
      <Product displayMode={mode} />
      <div className='container flex flex-col gap-y-[2.4rem]'>
        <Categories />
        <ProductHighlights />
        <About />
      </div>
    </>
  )
}
