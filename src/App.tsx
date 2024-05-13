import BaseLayout from './components/layouts/BaseLayout'
import HomePage from './components/pages/Homepage'
import ProductPage from './components/pages/ProductPage'
// import HomePage from './components/pages/Homepage'

function App() {
  return (
    // <Canvas lightMode={true}>
    <BaseLayout>
      <ProductPage />
    </BaseLayout>
    // </Canvas>
  )
}

export default App

// const appData = {
//   headphones: {
//     title: 'headphones',
//     products: [
//       {
//         model: 'xx99 mark ii',
//         category: 'headphones',
//         img: 'bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg)] min-[1110px]:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg)]',
//         description:
//           'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
//       },
//       {
//         model: 'xx99 mark i',
//         category: 'headphones',
//         img: 'bg-[url(./images/products/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg)] min-[1110px]:bg-[url(./images/products/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg)]',
//         description:
//           'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
//       },
//       {
//         model: 'xx59',
//         category: 'headphones',
//         img: 'bg-[url(./images/products/product-xx59-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx59-headphones/tablet/image-category-page-preview.jpg)] min-[1110px]:bg-[url(./images/products/product-xx59-headphones/desktop/image-category-page-preview.jpg)]',
//         description:
//           'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
//       },
//     ],
//   },
//   speakers: {
//     title: 'speakers',
//     products: [
//       {
//         model: 'zx9',
//         category: 'speaker',
//         img: 'bg-[url(./images/products/product-zx9-speaker/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-zx9-speaker/tablet/image-category-page-preview.jpg)] min-[1110px]:bg-[url(./images/products/product-zx9-speaker/desktop/image-category-page-preview.jpg)]',
//         description:
//           'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
//       },
//       {
//         model: 'zx7',
//         category: 'speaker',
//         img: 'bg-[url(./images/products/product-zx7-speaker/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-zx7-speaker/tablet/image-category-page-preview.jpg)] min-[1110px]:bg-[url(./images/products/product-zx7-speaker/desktop/image-category-page-preview.jpg)]',
//         description:
//           'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
//       },
//     ],
//   },
//   earbuds: {
//     title: 'earbuds',
//     products: [
//       {
//         model: 'yx1 wireless',
//         category: 'earbuds',
//         img: 'bg-[url(./images/products/product-yx1-earbuds/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-yx1-earbuds/tablet/image-category-page-preview.jpg)] min-[1110px]:bg-[url(./images/products/product-yx1-earbuds/desktop/image-category-page-preview.jpg)]',
//         description:
//           'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earbuds. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
//       },
//     ],
//   },
// }

// export interface Product {
//   model: string
//   category: string
//   new: boolean
//   primaryImage: string
//   cardImage: string
//   description: string
//   price: string
//   features: string
//   inventory: { quantity: number; name: string }[]
//   collageImg1: string
//   collageImg2: string
//   collageImg3: string
//   relatedProducts: string[]
// }

// export interface ProductData {
//   [key: string]: Product
// }

// const data: ProductData = {
//   xx992: {
//     model: 'xx99 mark ii',
//     category: 'headphones',
//     new: true,
//     primaryImage:
//       'bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg)]',
//     cardImage:
//       'bg-[url(./images/shared/mobile/image-xx99-mark-two-headphones.jpg)] tablet2:bg-[url(./images/shared/tablet/image-xx99-mark-two-headphones.jpg)] desktop2:bg-[url(./images/shared/desktop/image-xx99-mark-two-headphones.jpg)]',
//     description:
//       'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
//     price: '$2,999',
//     features:
//       'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation.Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
//     inventory: [
//       {
//         quantity: 1,
//         name: 'headphone unit',
//       },
//       {
//         quantity: 2,
//         name: 'replacement earcups',
//       },
//       {
//         quantity: 1,
//         name: 'user manual',
//       },
//       {
//         quantity: 1,
//         name: '3.5mm 5m audio cable',
//       },
//       {
//         quantity: 1,
//         name: 'travel bag',
//       },
//     ],
//     collageImg1:
//       'bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg)]',
//     collageImg2:
//       'bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg)]',
//     collageImg3:
//       'bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg)] ',
//     relatedProducts: ['xx991', 'xx59', 'zx9'],
//   },
//   xx991: {
//     model: 'xx99 mark i',
//     category: 'headphones',
//     new: false,
//     primaryImage:
//       'bg-[url(./images/products/product-xx99-mark-one-headphones/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-one-headphones/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-one-headphones/desktop/image-product.jpg)]',
//     cardImage:
//       'bg-[url(./images/shared/mobile/image-xx99-mark-one-headphones.jpg)] tablet2:bg-[url(./images/shared/tablet/image-xx99-mark-one-headphones.jpg)] desktop2:bg-[url(./images/shared/desktop/image-xx99-mark-one-headphones.jpg)]',
//     description:
//       'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
//     price: '$1,750',
//     features:
//       'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
//     inventory: [
//       {
//         quantity: 1,
//         name: 'headphone unit',
//       },
//       {
//         quantity: 2,
//         name: 'replacement earcups',
//       },
//       {
//         quantity: 1,
//         name: 'user manual',
//       },
//       {
//         quantity: 1,
//         name: '3.5mm 5m audio cable',
//       },
//     ],
//     collageImg1:
//       'bg-[url(./images/products/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg)]',
//     collageImg2:
//       'bg-[url(./images/products/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg)]',
//     collageImg3:
//       'bg-[url(./images/products/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg)] ',
//     relatedProducts: ['xx992', 'xx59', 'zx9'],
//   },
//   xx59: {
//     model: 'xx59',
//     category: 'headphones',
//     new: false,
//     primaryImage:
//       'bg-[url(./images/products/product-xx59-headphones/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-xx59-headphones/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-xx59-headphones/desktop/image-product.jpg)]',
//     cardImage:
//       'bg-[url(./images/shared/mobile/image-xx59-headphones.jpg)] tablet2:bg-[url(./images/shared/tablet/image-xx59-headphones.jpg)] desktop2:bg-[url(./images/shared/desktop/image-xx59-headphones.jpg)]',
//     description:
//       'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
//     price: '$899',
//     features:
//       'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
//     inventory: [
//       {
//         quantity: 1,
//         name: 'headphone unit',
//       },
//       {
//         quantity: 2,
//         name: 'replacement earcups',
//       },
//       {
//         quantity: 1,
//         name: 'user manual',
//       },
//       {
//         quantity: 1,
//         name: '3.5mm 5m audio cable',
//       },
//     ],
//     collageImg1:
//       'bg-[url(./images/products/product-xx59-headphones/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-xx59-headphones/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-xx59-headphones/desktop/image-gallery-1.jpg)]',
//     collageImg2:
//       'bg-[url(./images/products/product-xx59-headphones/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-xx59-headphones/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-xx59-headphones/desktop/image-gallery-2.jpg)]',
//     collageImg3:
//       'bg-[url(./images/products/product-xx59-headphones/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-xx59-headphones/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-xx59-headphones/desktop/image-gallery-3.jpg)] ',
//     relatedProducts: ['xx992', 'xx991', 'zx9'],
//   },
//   zx9: {
//     model: 'zx9',
//     category: 'speaker',
//     new: true,
//     primaryImage:
//       'bg-[url(./images/products/product-zx9-speaker/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-zx9-speaker/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-zx9-speaker/desktop/image-product.jpg)]',
//     cardImage:
//       'bg-[url(./images/shared/mobile/image-zx9-speaker.jpg)] tablet2:bg-[url(./images/shared/tablet/image-zx9-speaker.jpg)] desktop2:bg-[url(./images/shared/desktop/image-zx9-speaker.jpg)]',
//     description:
//       'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
//     price: '$4,500',
//     features:
//       'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
//     inventory: [
//       {
//         quantity: 2,
//         name: 'speaker unit',
//       },
//       {
//         quantity: 2,
//         name: 'speaker cloth panel',
//       },
//       {
//         quantity: 1,
//         name: 'user manual',
//       },
//       {
//         quantity: 1,
//         name: '3.5mm 10m audio cable',
//       },
//       {
//         quantity: 1,
//         name: '10m optical cable',
//       },
//     ],
//     collageImg1:
//       'bg-[url(./images/products/product-zx9-speaker/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-zx9-speaker/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-zx9-speaker/desktop/image-gallery-1.jpg)]',
//     collageImg2:
//       'bg-[url(./images/products/product-zx9-speaker/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-zx9-speaker/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-zx9-speaker/desktop/image-gallery-2.jpg)]',
//     collageImg3:
//       'bg-[url(./images/products/product-zx9-speaker/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-zx9-speaker/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-zx9-speaker/desktop/image-gallery-3.jpg)] ',
//     relatedProducts: ['zx7', 'xx991', 'xx59'],
//   },
//   zx7: {
//     model: 'zx7',
//     category: 'speaker',
//     new: false,
//     primaryImage:
//       'bg-[url(./images/products/product-zx7-speaker/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-zx7-speaker/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-zx7-speaker/desktop/image-product.jpg)]',
//     cardImage:
//       'bg-[url(./images/shared/mobile/image-zx7-speaker.jpg)] tablet2:bg-[url(./images/shared/tablet/image-zx7-speaker.jpg)] desktop2:bg-[url(./images/shared/desktop/image-zx7-speaker.jpg)]',
//     description:
//       'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
//     price: '$3,500',
//     features:
//       'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
//     inventory: [
//       {
//         quantity: 2,
//         name: 'speaker unit',
//       },
//       {
//         quantity: 2,
//         name: 'speaker cloth panel',
//       },
//       {
//         quantity: 1,
//         name: 'user manual',
//       },
//       {
//         quantity: 1,
//         name: '3.5mm 7.5m audio cable',
//       },
//       {
//         quantity: 1,
//         name: '7.5m optical cable',
//       },
//     ],
//     collageImg1:
//       'bg-[url(./images/products/product-zx7-speaker/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-zx7-speaker/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-zx7-speaker/desktop/image-gallery-1.jpg)]',
//     collageImg2:
//       'bg-[url(./images/products/product-zx7-speaker/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-zx7-speaker/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-zx7-speaker/desktop/image-gallery-2.jpg)]',
//     collageImg3:
//       'bg-[url(./images/products/product-zx7-speaker/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-zx7-speaker/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-zx7-speaker/desktop/image-gallery-3.jpg)] ',
//     relatedProducts: ['zx9', 'xx991', 'xx59'],
//   },
//   yx1: {
//     model: 'yx1 wireless',
//     category: 'earbuds',
//     new: true,
//     primaryImage:
//       'bg-[url(./images/products/product-zx7-speaker/mobile/image-product.jpg)] tablet2:bg-[url(./images/products/product-zx7-speaker/tablet/image-product.jpg)] desktop2:bg-[url(./images/products/product-zx7-speaker/desktop/image-product.jpg)]',
//     cardImage: '',
//     description:
//       'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
//     price: '$599',
//     features:
//       'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
//     inventory: [
//       {
//         quantity: 2,
//         name: 'earbud unit',
//       },
//       {
//         quantity: 6,
//         name: 'multi-size earplugs',
//       },
//       {
//         quantity: 1,
//         name: 'user manual',
//       },
//       {
//         quantity: 1,
//         name: 'USB-C charging cable',
//       },
//       {
//         quantity: 1,
//         name: 'travel pouch',
//       },
//     ],
//     collageImg1:
//       'bg-[url(./images/products/product-yx1-earbuds/mobile/image-gallery-1.jpg)] tablet2:bg-[url(./images/products/product-yx1-earbuds/tablet/image-gallery-1.jpg)] desktop2:bg-[url(./images/products/product-yx1-earbuds/desktop/image-gallery-1.jpg)]',
//     collageImg2:
//       'bg-[url(./images/products/product-yx1-earbuds/mobile/image-gallery-2.jpg)] tablet2:bg-[url(./images/products/product-yx1-earbuds/tablet/image-gallery-2.jpg)] desktop2:bg-[url(./images/products/product-yx1-earbuds/desktop/image-gallery-2.jpg)]',
//     collageImg3:
//       'bg-[url(./images/products/product-yx1-earbuds/mobile/image-gallery-3.jpg)] tablet2:bg-[url(./images/products/product-yx1-earbuds/tablet/image-gallery-3.jpg)] desktop2:bg-[url(./images/products/product-yx1-earbuds/desktop/image-gallery-3.jpg)] ',
//     relatedProducts: ['zx9', 'xx991', 'xx59'],
//   },
// }
