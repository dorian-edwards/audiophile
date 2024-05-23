import { Link } from 'react-router-dom'
import Cart from '../../icons/Cart'
import Hamburger from '../../icons/Hamburger'
import Logo from '../../icons/Logo'

export default function Header() {
  return (
    <header className='bg-black text-white'>
      <div className='container py-[3.2rem]'>
        <div className='mobile-nav flex justify-between tablet2:hidden'>
          <Hamburger />
          <Link to='/'>
            <Logo />
          </Link>
          <Cart />
        </div>
        <div className='desktop-tablet-nav hidden tablet2:flex justify-between'>
          <div className='tablet-logo-burger-wrapper flex gap-x-[4.3rem] items-center'>
            <div className='burger-wrapper desktop2:hidden'>
              <Hamburger />
            </div>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <nav className='hidden desktop2:block'>
            <ul className='flex gap-[3.4rem]'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/categories/headphones'>Headphones</Link>
              </li>
              <li>
                <Link to='/categories/speakers'>Speakers</Link>
              </li>
              <li>
                <Link to='/categories/earbuds'>Earbuds</Link>
              </li>
            </ul>
          </nav>
          <Cart />
        </div>
      </div>
      <div className='container header-border h-[0.1rem] bg-border-gray max-[480px]:w-[100%]' />
    </header>
  )
}
