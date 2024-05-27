export default function ProductImage({
  primaryImage,
}: {
  primaryImage: string
}) {
  console.log(primaryImage)

  return (
    <div
      className={`product-image__img-wrapper w-full bg-cover bg-center bg-no-repeat ${primaryImage} aspect-square tablet2:pb-0 shrink-0 tablet2:max-w-[28rem] mb-[3.2rem] tablet2:mb-0 tablet2:aspect-[281/480] desktop2:max-w-[54rem] desktop2:aspect-[27/28] mx-auto`}
    />
  )
}
