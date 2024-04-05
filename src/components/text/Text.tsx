import { ReactNode } from 'react'
import textStyles from './textStyles'

export default function Text({
  type,
  children,
  className,
  sx,
}: {
  type?: string | undefined
  children: ReactNode
  className?: string
  sx?: React.CSSProperties | undefined
}) {
  let element
  const style: React.CSSProperties | undefined = {
    textTransform: 'uppercase',
    ...textStyles[type as string],
  }

  switch (type) {
    case 'h1':
      element = (
        <h1 className={className} style={{ ...style, ...sx }}>
          {children}
        </h1>
      )
      break
    case 'h2Mobile':
      element = (
        <h2 className={className} style={{ ...style, ...sx }}>
          {children}
        </h2>
      )
      break
    case 'h2':
      element = (
        <h2 className={className} style={{ ...style, ...sx }}>
          {children}
        </h2>
      )
      break
    case 'h3':
      element = (
        <h3 className={className} style={{ ...style, ...sx }}>
          {children}
        </h3>
      )
      break
    case 'h4':
      element = (
        <h4 className={className} style={{ ...style, ...sx }}>
          {children}
        </h4>
      )
      break
    case 'h5':
      element = (
        <h5 className={className} style={{ ...style, ...sx }}>
          {children}
        </h5>
      )
      break
    case 'h6':
      element = (
        <h6 className={className} style={{ ...style, ...sx }}>
          {children}
        </h6>
      )
      break
    case 'overline':
      element = (
        <p className={className} style={{ ...style, ...sx }}>
          {children}
        </p>
      )
      break
    case 'link':
      element = (
        <p
          className={`${className} hover:!text-caramel transition-colors duration-300`}
          style={{ ...style, ...sx }}
        >
          {children}
        </p>
      )
      break
    case 'sub-title':
      element = (
        <p className={className} style={{ ...style, ...sx }}>
          {children}
        </p>
      )
      break
    case 'body':
      element = (
        <p className={className} style={{ ...style, ...sx }}>
          {children}
        </p>
      )
  }

  return <>{element}</>
}
