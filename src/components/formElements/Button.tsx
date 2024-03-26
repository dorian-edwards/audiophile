import { ReactNode } from 'react'

export default function Button({
  children,
  variant,
  sx,
}: {
  children: ReactNode
  variant: number | string
  sx?: React.CSSProperties | undefined
}) {
  return (
    <button
      className={
        'text-[1.3rem] font-bold py-[1.5rem] px-[3.2rem] uppercase w-full max-w-[60rem] tracking-[1px] ' +
        buttonStyles[variant]
      }
      style={sx}
    >
      {children}
      {variant === 3 || variant === '3' ? <ChevronRight /> : null}
    </button>
  )
}

const buttonStyles: { [key: number | string]: string } = {
  1: 'text-white bg-caramel hover:bg-atomic_tangerine hover:cursor-pointer',
  2: 'text-black bg-white border border-black hover:text-white hover:bg-black',
  3: 'text-gray hover:text-caramel flex items-center justify-center gap-x-[1.3rem]',
}

export function ChevronRight() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={4}
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m8.25 4.5 7.5 7.5-7.5 7.5'
      />
    </svg>
  )
}
