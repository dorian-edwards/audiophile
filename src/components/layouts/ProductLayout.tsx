import { ReactNode } from 'react'
import About from '../About'
import Categories from '../Categories'

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className='container'>
      {children}
      <Categories />
      <About />
    </div>
  )
}
