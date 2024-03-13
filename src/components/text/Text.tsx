import { ReactNode } from 'react'
import textStyles from './textStyles'

export default function Text({
  type,
  children,
}: {
  type: string
  children: ReactNode
}) {
  let element
  const style: React.CSSProperties | undefined = {
    ...textStyles[type],
    textTransform: 'uppercase',
  }

  switch (type) {
    case 'h1':
      element = <h1 style={style}>{children}</h1>
      break
    case 'h2':
      element = <h2 style={style}>{children}</h2>
      break
    case 'h3':
      element = <h3 style={style}>{children}</h3>
      break
    case 'h4':
      element = <h4 style={style}>{children}</h4>
      break
    case 'h5':
      element = <h5 style={style}>{children}</h5>
      break
    case 'h6':
      element = <h6 style={style}>{children}</h6>
      break
    case 'overline':
      element = <p style={style}>{children}</p>
      break
    case 'sub_title':
      element = <p style={style}>{children}</p>
      break
    case 'body':
      element = <p style={style}>{children}</p>
  }

  return <>{element}</>
}
