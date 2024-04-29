import { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../Footer'

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
