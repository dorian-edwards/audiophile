import Button from './formElements/Button'
import Text from './text/Text'
import Earbuds from '../images/shared/mobile/image-category-thumbnail-earphones.png'
import Speaker from '../images/shared/mobile/image-category-thumbnail-speakers.png'
import Headphones from '../images/shared/mobile/image-category-thumbnail-headphones.png'
import { CATEGORY } from '../dataTypes'

export default function CategoryCard({ type }: { type: CATEGORY }) {
  const { title, img, imgAlt } = categoryData[type]
  return (
    <div
      id={`category-card-${title}`}
      className='category-card w-full desktop:max-w-none max-w-[35rem] relative'
    >
      <img src={img} alt={imgAlt} className='w-[60%] mx-auto relative z-10' />
      <div className='category-card-text rounded-[0.8rem] bg-anti-flash-white pt-[8.8rem] pb-[2.2rem] absolute w-full mx-auto bottom-[-64px] z-0'>
        <Text
          type='body'
          sx={{
            color: '#000',
            textTransform: 'uppercase',
            fontSize: '1.5rem',
            fontWeight: '700',
            letterSpacing: '0.107rem',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
        <Button variant={3} svgSx={{ stroke: '#D87D4A' }}>
          Shop
        </Button>
      </div>
    </div>
  )
}

export const categoryData: {
  [key in CATEGORY]: { title: string; img: string; imgAlt: string }
} = {
  [CATEGORY.HEADPHONES]: {
    title: 'headphones',
    img: Headphones,
    imgAlt: 'Audiophile headphones',
  },
  [CATEGORY.SPEAKERS]: {
    title: 'speakers',
    img: Speaker,
    imgAlt: 'Audiophile speaker',
  },
  [CATEGORY.EARBUDS]: {
    title: 'earbuds',
    img: Earbuds,
    imgAlt: 'Audiophile earbbuds',
  },
}
