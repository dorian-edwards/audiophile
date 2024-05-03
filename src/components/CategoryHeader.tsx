export default function CategoryHeader({ title }: { title: string }) {
  return (
    <section className='product-title bg-black py-[3.2rem] mb-[6.4rem] tablet:mb-[12rem] tablet:pt-[10.5rem] tablet:pb-[9.8rem] min-[1100px]:mb-[16rem]'>
      <h1 className='text-med tablet:text-xl text-white text-center uppercase'>
        {title}
      </h1>
    </section>
  )
}
