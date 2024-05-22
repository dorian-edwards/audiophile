import { ReactNode } from 'react'
import About from '../About'
import Categories from '../Categories'

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Categories />
      <About />
    </>
  )
}
