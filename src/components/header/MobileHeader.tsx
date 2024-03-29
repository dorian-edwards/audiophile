import MenuIcon from '@mui/icons-material/Menu'
import Cart from '../../icons/Cart'
import Logo from '../../icons/Logo'

export default function MobileHeader() {
  return (
    <header
      id='mobile-header'
      className='h-[9rem] bg-black px-[2.4rem] flex justify-between items-center border-b-[0.1rem] border-b-border-gray'
    >
      <MenuIcon sx={{ color: '#FFF' }} fontSize='large' />
      <Logo />
      <Cart />
    </header>
  )
}
