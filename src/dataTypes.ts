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
