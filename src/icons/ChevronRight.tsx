export default function ChevronRight({
  svgSx,
}: {
  svgSx?: React.SVGAttributes<SVGSVGElement>
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={4}
      stroke='currentColor'
      className='w-6 h-6'
      {...svgSx}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m8.25 4.5 7.5 7.5-7.5 7.5'
      />
    </svg>
  )
}
