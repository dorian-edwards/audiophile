export default function ProductFeatures({ features }: { features: string }) {
  return (
    <div className='product-features mb-[8.8rem] desktop2:max-w-[63.5rem]'>
      <h2 className='product-features__title text-section-heading uppercase mb-[2.4rem]'>
        features
      </h2>
      {features.split('\n\n').map((paragraph, index) => (
        <p
          key={index}
          className='product-features__description text-body text-med-gray mb-[3.6rem]'
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}
