import MenuIcon from '@mui/icons-material/Menu'
import Cart from '../../icons/Cart'
import Logo from '../../icons/Logo'

export default function TabletHeader() {
  return (
    <header id='tablet-header' className='h-[9rem] bg-black px-[2.4rem]'>
      <div className='content-container h-full w-full max-w-[68.9rem] mx-auto border-b-[0.1rem] border-b-border-gray flex items-center justify-between'>
        <div className='flex gap-[4.2rem]'>
          <MenuIcon sx={{ color: '#FFF' }} fontSize='large' />
          <Logo />
        </div>
        <Cart />
      </div>
    </header>
  )
}
