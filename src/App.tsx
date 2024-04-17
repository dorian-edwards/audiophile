import CategoryCard from './components/CategoryCard'
import { PagePreviewYX1 } from './components/PagePreviewYX1'
import { PagePreviewZX7 } from './components/PagePreviewZX7'
import PagePreviewZX9 from './components/PagePreviewZX9'
import Header from './components/header/Header'
import { CATEGORY } from './dataTypes'

function App() {
  return (
    // <Canvas lightMode={true}>
    <>
      <Header />
      <div className='container w-[87.2%] tablet:w-[89.7%] desktop:w-[77.1%] max-w-[111rem] mx-auto flex flex-col gap-y-[2.4rem]'>
        <div className='w-full flex flex-col justify-center items-center desktop:items-baseline desktop:flex-row  gap-y-[10rem] gap-x-[1rem] mb-[10rem] tablet:mb-[16.8rem]'>
          <CategoryCard type={CATEGORY.HEADPHONES} />
          <CategoryCard type={CATEGORY.SPEAKERS} />
          <CategoryCard type={CATEGORY.EARBUDS} />
        </div>
        <PagePreviewZX9 />
        <PagePreviewZX7 />
        <PagePreviewYX1 />
      </div>
    </>
    // </Canvas>
  )
}

export default App
