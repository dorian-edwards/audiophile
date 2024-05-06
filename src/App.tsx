import BaseLayout from './components/layouts/BaseLayout'
import CategoryPage from './components/pages/CategoryPage'
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

const appData = {
  headphones: {
    title: 'headphones',
    products: [
      {
        model: 'xx99 mark ii',
        category: 'headphones',
        img: 'bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg)] min-[1100px]:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg)]',
        description:
          'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      },
      {
        model: 'xx99 mark i',
        category: 'headphones',
        img: 'bg-[url(./images/products/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg)] min-[1100px]:bg-[url(./images/products/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg)]',
        description:
          'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      },
      {
        model: 'xx59',
        category: 'headphones',
        img: 'bg-[url(./images/products/product-xx59-headphones/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-xx59-headphones/tablet/image-category-page-preview.jpg)] min-[1100px]:bg-[url(./images/products/product-xx59-headphones/desktop/image-category-page-preview.jpg)]',
        description:
          'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      },
    ],
  },
  speakers: {
    title: 'speakers',
    products: [
      {
        model: 'zx9',
        category: 'speaker',
        img: 'bg-[url(./images/products/product-zx9-speaker/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-zx9-speaker/tablet/image-category-page-preview.jpg)] min-[1100px]:bg-[url(./images/products/product-zx9-speaker/desktop/image-category-page-preview.jpg)]',
        description:
          'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      },
      {
        model: 'zx7',
        category: 'speaker',
        img: 'bg-[url(./images/products/product-zx7-speaker/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-zx7-speaker/tablet/image-category-page-preview.jpg)] min-[1100px]:bg-[url(./images/products/product-zx7-speaker/desktop/image-category-page-preview.jpg)]',
        description:
          'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      },
    ],
  },
  earbuds: {
    title: 'earbuds',
    products: [
      {
        model: 'yx1 wireless',
        category: 'earbuds',
        img: 'bg-[url(./images/products/product-yx1-earbuds/mobile/image-category-page-preview.jpg)] tablet:bg-[url(./images/products/product-yx1-earbuds/tablet/image-category-page-preview.jpg)] min-[1100px]:bg-[url(./images/products/product-yx1-earbuds/desktop/image-category-page-preview.jpg)]',
        description:
          'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      },
    ],
  },
}
