import { CATEGORY } from '../../dataTypes'
import useScreenMonitor from '../../hooks/useScreenMonitor'
import About from '../About'
import CategoryCard from '../CategoryCard'
import { PagePreviewYX1 } from '../PagePreviewYX1'
import { PagePreviewZX7 } from '../PagePreviewZX7'
import PagePreviewZX9 from '../PagePreviewZX9'
import Product from '../header/Product'

export default function HomePage() {
  let mode = useScreenMonitor()
  return (
    <>
      <Product displayMode={mode} />
      <div className='container flex flex-col gap-y-[2.4rem]'>
        <div className='w-full flex flex-col justify-center items-center desktop:items-baseline desktop:flex-row  gap-y-[10rem] gap-x-[1rem] mb-[10rem] tablet:mb-[16.8rem]'>
          <CategoryCard type={CATEGORY.HEADPHONES} />
          <CategoryCard type={CATEGORY.SPEAKERS} />
          <CategoryCard type={CATEGORY.EARBUDS} />
        </div>
        <section className='page-previews mb-[12rem] tablet:mb-[9.6rem] desktop:mb-[20rem] flex flex-col gap-y-[2.4rem]'>
          <PagePreviewZX9 />
          <PagePreviewZX7 />
          <PagePreviewYX1 />
        </section>
        <About />
      </div>
    </>
  )
}
