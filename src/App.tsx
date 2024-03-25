import MenuIcon from '@mui/icons-material/Menu'
import Logo from './icons/Logo'
import Cart from './icons/Cart'

function App() {
  return <MobileNav />
}

export default App

export function MobileNav() {
  return (
    <nav className='h-[9rem] bg-black px-[2.4rem] flex justify-between items-center border-[0.1rem] border-border-gray'>
      <MenuIcon sx={{ color: '#FFF' }} fontSize='large' />
      <Logo />
      <Cart />
    </nav>
  )
}
