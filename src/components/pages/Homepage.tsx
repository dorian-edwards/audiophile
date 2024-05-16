import About from '../About'
import Categories from '../Categories'
import HeadlineBanner from '../HeadlineBanner'
import ProductHighlights from '../ProductHighlights'

export default function HomePage() {
  return (
    <>
      <HeadlineBanner />
      <div className='container flex flex-col gap-y-[2.4rem]'>
        <Categories />
        <ProductHighlights />
        <About />
      </div>
    </>
  )
}
