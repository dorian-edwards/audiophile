import Cart from '../../icons/Cart'
import Hamburger from '../../icons/Hamburger'
import Logo from '../../icons/Logo'

export default function MobileHeader() {
  return (
    <header
      id='mobile-header'
      className='h-[9rem] bg-black px-[2.4rem] flex justify-between items-center border-b-[0.1rem] border-b-border-gray'
    >
      <Hamburger />
      <Logo />
      <Cart />
    </header>
  )
}
