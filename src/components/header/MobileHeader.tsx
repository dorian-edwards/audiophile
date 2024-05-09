import Cart from '../../icons/Cart'
import Hamburger from '../../icons/Hamburger'
import Logo from '../../icons/Logo'

export default function MobileHeader() {
  return (
    <header
      id='mobile-header'
      className='h-[9rem] bg-black border-b-[0.1rem] border-b-border-gray'
    >
      <div className='container h-full flex justify-between items-center'>
        <Hamburger />
        <Logo />
        <Cart />
      </div>
    </header>
  )
}
