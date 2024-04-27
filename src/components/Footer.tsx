import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import Logo from '../icons/Logo'
import TwitterIcon from '../icons/TwitterIcon'
import Text from './text/Text'

export default function Footer() {
  return (
    <footer className='footer bg-black'>
      <div className='container pt-[5.2rem] tablet:pt-[6rem] desktop:pt-[7.5rem] relative flex flex-col items-center min-[768px]:items-start'>
        <div className='style-bar-container absolute top-0 w-full flex justify-center min-[768px]:justify-start'>
          <div className='bar w-[10.1rem] h-[0.4rem] bg-caramel' />
        </div>
        <div className='w-full min-[1440px]:flex min-[1440px]:justify-between'>
          <div className='logo-wrapper mb-[4.8rem] flex justify-center min-[768px]:justify-start'>
            <Logo />
          </div>
          <FooterNav />
        </div>
        <div className='w-full min-[1440px]:flex justify-between items-end min-[1440px]:mb-[5.6rem]'>
          <Text
            type='body'
            className='!text-med-gray text-center mb-[4.8rem] min-[768px]:text-left max-w-[54rem] min-[1440px]:mb-0 mx-auto min-[768px]:ml-0'
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Text>
          <div className='nav-social-wrapper hidden min-[1440px]:block'>
            <NavSocial />
          </div>
        </div>
        <div className='w-full min-[768px]:flex justify-between'>
          <Text
            type='body'
            className='copyright !font-bold !text-med-gray mb-[4.8rem] text-center'
          >
            Copyright 2024. All Rights Reserved
          </Text>
          <div className='nav-social-wrapper min-[1440px]:hidden'>
            <NavSocial />
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FooterNav() {
  return (
    <nav className='footer-nav mb-[4.8rem]'>
      <ul className='flex flex-col items-center gap-y-[1.6rem] min-[768px]:flex-row gap-x-[3.4rem]'>
        <li>
          <Text type='link'>Home</Text>
        </li>
        <li>
          <Text type='link'>Headphones</Text>
        </li>
        <li>
          <Text type='link'>Speakers</Text>
        </li>
        <li>
          <Text type='link'>Earbuds</Text>
        </li>
      </ul>
    </nav>
  )
}

export function NavSocial() {
  return (
    <nav className='nav-social mb-[3.8rem] min-[1440px]:mb-0'>
      <ul className='flex items-center justify-center gap-x-[1.6rem]'>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
      </ul>
    </nav>
  )
}
