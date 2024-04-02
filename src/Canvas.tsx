/**
 * This component, as the name implies, is a place for building a component in isolation
 */

import { ReactNode } from 'react'

export default function Canvas({
  lightMode,
  children,
}: {
  lightMode: boolean
  children: ReactNode
}) {
  return (
    <div
      id='canvas'
      className='h-[100vh] w-full flex items-center justify-center'
      style={{ backgroundColor: lightMode ? '#FFF' : '#000' }}
    >
      {children}
    </div>
  )
}
