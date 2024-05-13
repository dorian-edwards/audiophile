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
  productDetails: {
    model: string
    category: string
    img: string
    description: string
  }
  index: number
}

export interface ProductDetails {
  model: string
  category: string
  img: string
  description: string
}

export interface ProductsProps {
  products: ProductDetails[]
}

export interface CategoryPageProps {
  [key: string]: {
    title: string
    products: ProductDetails[]
  }
}
