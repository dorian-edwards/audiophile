import { Link } from 'react-router-dom'
import Button from './formElements/Button'

export default function HeadlineBanner() {
  return (
    <section className='headline-banner pt-[10.8rem] pb-[11.2rem] mb-[4rem] bg-no-repeat bg-bottom bg-cover bg-black bg-[url(./images/home/mobile/image-header.jpg)] min-[481px]:bg-[url(./images/home/tablet/image-header.jpg)] min-[481px]:bg-[length:calc(100vw*0.063_+_643px)] tablet2:pt-[12.6rem] tablet2:pb-[16.7rem] desktop2:bg-[url(./images/home/desktop/image-header.jpg)] desktop2:bg-[size:145rem]'>
      <div className='content-wrapper container'>
        <small className='headline-banner__overline block text-overline text-center text-med-gray uppercase mb-[1.6rem] tablet2:mb-[2.4rem] desktop2:text-left'>
          new product
        </small>
        <h1 className='text-center text-[3.6rem] text-white font-bold tracking-[0.129rem] leading-[4rem] uppercase mb-[2.4rem] tablet2:text-2xl desktop2:text-left'>
          XX99 MarkII
          <br />
          Headphones
        </h1>
        <p className='text-body text-light-gray text-center mb-[2.8rem] max-w-[35rem] mx-auto tablet2:mb-[4rem] desktop2:text-left desktop2:ml-0'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to='/products/xx992'>
          <Button variant={1} className='max-w-[16.4rem] mx-auto desktop2:ml-0'>
            See Product
          </Button>
        </Link>
      </div>
    </section>
  )
}
