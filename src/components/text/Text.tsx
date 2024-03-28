import { ReactNode } from 'react'
import textStyles from './textStyles'

export default function Text({
  type,
  children,
  className,
}: {
  type: string
  children: ReactNode
  className?: string
}) {
  let element
  const style: React.CSSProperties | undefined = {
    textTransform: 'uppercase',
    ...textStyles[type],
  }

  switch (type) {
    case 'h1':
      element = (
        <h1 className={className} style={style}>
          {children}
        </h1>
      )
      break
    case 'h1Mobile':
      element = (
        <h1 className={className} style={style}>
          {children}
        </h1>
      )
      break
    case 'h2':
      element = (
        <h2 className={className} style={style}>
          {children}
        </h2>
      )
      break
    case 'h3':
      element = (
        <h3 className={className} style={style}>
          {children}
        </h3>
      )
      break
    case 'h4':
      element = (
        <h4 className={className} style={style}>
          {children}
        </h4>
      )
      break
    case 'h5':
      element = (
        <h5 className={className} style={style}>
          {children}
        </h5>
      )
      break
    case 'h6':
      element = (
        <h6 className={className} style={style}>
          {children}
        </h6>
      )
      break
    case 'overline':
      element = (
        <p className={className} style={style}>
          {children}
        </p>
      )
      break
    case 'link':
      element = (
        <p
          className={`${className} hover:!text-caramel transition-colors duration-300`}
          style={style}
        >
          {children}
        </p>
      )
      break
    case 'sub-title':
      element = (
        <p className={className} style={style}>
          {children}
        </p>
      )
      break
    case 'body':
      element = (
        <p className={className} style={style}>
          {children}
        </p>
      )
  }

  return <>{element}</>
}
