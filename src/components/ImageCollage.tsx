export default function ImageCollage({ images }: { images: string[] }) {
  const [img1, img2, img3] = images
  return (
    <section className='collage flex flex-col gap-y-[2.4rem] tablet2:flex-row tablet2:gap-x-[1.8rem] mb-[12rem]'>
      <div className=' flex flex-col gap-y-[2.4rem] tablet2:w-[40%] justify-between'>
        <div
          className={`img-1 rounded-[0.8rem] aspect-[109/58] bg-no-repeat bg-center bg-cover ${img1} tablet2:aspect-[277/184] desktop2:aspect-[277/184]`}
        />
        <div
          className={`img-2 rounded-[0.8rem] aspect-[109/58] bg-no-repeat bg-center bg-cover ${img2} tablet2:aspect-[277/184] desktop2:aspect-[277/184]`}
        />
      </div>
      <div
        className={`img-3 rounded-[0.8rem] aspect-[327/368] bg-no-repeat bg-center bg-cover ${img3} tablet2:w-[60%] tablet2:aspect-[395/368]`}
      />
    </section>
  )
}
