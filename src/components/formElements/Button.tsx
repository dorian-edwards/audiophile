import { ReactNode } from 'react'
import ChevronRight from '../../icons/ChevronRight'

export default function Button({
  children,
  className,
  variant,
  sx,
  svgSx,
}: {
  children: ReactNode
  className?: string | undefined
  variant: number | string
  sx?: React.CSSProperties | undefined
  svgSx?: React.SVGAttributes<SVGSVGElement>
}) {
  return (
    <button
      className={`text-[1.3rem] font-bold py-[1.5rem] px-[3.2rem] uppercase w-full max-w-[60rem] tracking-[1px] block ${buttonStyles[variant]}  ${className}`}
      style={sx}
    >
      {children}
      {variant === 3 || variant === '3' ? <ChevronRight svgSx={svgSx} /> : null}
    </button>
  )
}

const buttonStyles: { [key: number | string]: string } = {
  1: 'text-white bg-caramel hover:bg-atomic_tangerine hover:cursor-pointer',
  2: 'text-black bg-white border border-black hover:text-white hover:bg-black',
  3: 'text-gray hover:text-caramel flex items-center justify-center gap-x-[1.3rem]',
}
