import { CATEGORY } from '../../dataTypes'
import useScreenMonitor from '../../hooks/useScreenMonitor'
import CategoryCard from '../CategoryCard'
import { PagePreviewYX1 } from '../PagePreviewYX1'
import { PagePreviewZX7 } from '../PagePreviewZX7'
import PagePreviewZX9 from '../PagePreviewZX9'
import Product from '../header/Product'
import Text from '../text/Text'

export default function HomePage() {
  let mode = useScreenMonitor()
  return (
    <>
      <Product displayMode={mode} />
      <div className='container w-[87.2%] tablet:w-[89.7%] desktop:w-[77.1%] max-w-[111rem] mx-auto flex flex-col gap-y-[2.4rem]'>
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

export function About() {
  return (
    <div className='about flex flex-col desktop:flex-row desktop:justify-between gap-x-[5rem]'>
      <div className='img w-full h-[30rem] desktop:h-[58.8rem] desktop:max-w-[54rem] rounded-[0.8rem] mb-[4rem] bg-no-repeat bg-cover bg-center bg-[url(./images/shared/mobile/image-best-gear.jpg)] tablet:bg-[url(./images/shared/tablet/image-best-gear.jpg)] desktop:bg-[url(./images/shared/desktop/image-best-gear.jpg)] desktop:order-last' />
      <div className='abiout__content w-full desktop:max-w-[44.5rem] desktop:!text-left flex items-center'>
        <div className='text-wrapper'>
          <Text type='h4' className='text-center mb-[3.2rem] desktop:text-left'>
            Bringing you the <span className='text-caramel'>best</span> audio
            gear
          </Text>
          <Text
            type='body'
            className='!text-med-gray text-center desktop:text-left'
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </div>
      </div>
    </div>
  )
}
