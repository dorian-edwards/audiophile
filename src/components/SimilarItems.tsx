import ProductLinkCard from './ProductLinkCard'

export default function SimilarItems({
  relatedProducts,
}: {
  relatedProducts: string[]
}) {
  return (
    <section className='mb-[12rem] desktop2:mb-[16rem]'>
      <h2 className='similar-items__heading text-center text-section-heading uppercase mb-[4rem]'>
        You may also like
      </h2>
      <div className='w-full flex flex-col gap-y-[5.6rem] tablet2:flex-row tablet2:gap-x-[1rem] desktop2:gap-x-[3rem]'>
        {relatedProducts.map((name, i) => (
          <ProductLinkCard productName={name} key={i} />
        ))}
      </div>
    </section>
  )
}
