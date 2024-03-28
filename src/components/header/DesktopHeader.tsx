// temporary while there are no valid links
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Cart from '../../icons/Cart'
import Logo from '../../icons/Logo'
import Text from '../text/Text'

export default function DesktopHeader() {
  return (
    <header id='desktop-header' className='h-[9rem] bg-black px-[2.4rem]'>
      <div className='content-container h-full w-full max-w-[111rem] mx-auto border-b-[0.1rem] border-b-border-gray flex items-center justify-between'>
        <Logo />
        <nav>
          <ul className='flex gap-[3.4rem]'>
            <li>
              <a href='#'>
                <Text type={'link'}>Home</Text>
              </a>
            </li>
            <li>
              <a href='#'>
                <Text type={'link'}>Headphones</Text>
              </a>
            </li>
            <li>
              <a href='#'>
                <Text type={'link'}>Speakers</Text>
              </a>
            </li>
            <li>
              <a href='#'>
                <Text type={'link'}>Earbuds</Text>
              </a>
            </li>
          </ul>
        </nav>
        <Cart />
      </div>
    </header>
  )
}
