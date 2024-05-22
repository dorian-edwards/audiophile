export enum DISPLAY_MODE {
  MOBILE,
  TABLET,
  DESKTOP,
}

export enum CATEGORY {
  HEADPHONES = 'headphones',
  SPEAKERS = 'speakers',
  EARBUDS = 'earbuds',
}

export type PagePreviewStyles = {
  [key in DISPLAY_MODE]: {
    className: string
    contentWrapperStyling: string
    titleTextType: string
    titleTextStyle: React.CSSProperties | undefined
    bodyTextStyle: React.CSSProperties | undefined
  }
}

export interface ProductLinkProps {
  product: Product
  index: number
}

export interface ProductDetails {
  model: string
  category: string
  img: string
  description: string
}

export interface ProductsProps {
  products: Product[]
}

export interface CategoryPageProps {
  [key: string]: {
    title: string
    products: ProductDetails[]
  }
}

export interface Product {
  model: string
  productType: string
  category: string
  new: boolean
  primaryImage: string
  cardImage: string
  description: string
  price: string
  features: string
  inventory: { quantity: number; name: string }[]
  collageImg1: string
  collageImg2: string
  collageImg3: string
  relatedProducts: string[]
}

export interface ProductData {
  [key: string]: Product
}
