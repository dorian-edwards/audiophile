import { DISPLAY_MODE } from '../../dataTypes'
import useScreenMonitor from '../../hooks/useScreenMonitor'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import Product from './Product'
import TabletHeader from './TabletHeader'

export default function Header() {
  let mode = useScreenMonitor()
  let element
  switch (mode) {
    case DISPLAY_MODE.DESKTOP:
      element = (
        <>
          <DesktopHeader />
          <Product variant='desktop' />
        </>
      )
      break
    case DISPLAY_MODE.TABLET:
      element = (
        <>
          <TabletHeader />
          <Product variant='tablet' />
        </>
      )
      break
    case DISPLAY_MODE.MOBILE:
      element = (
        <>
          <MobileHeader />
          <Product variant='mobile' />
        </>
      )
  }
  return element
}
