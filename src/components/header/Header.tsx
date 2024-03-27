import { DISPLAY_MODE } from '../../dataTypes'
import useScreenMonitor from '../../hooks/useScreenMonitor'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import TabletHeader from './TabletHeader'

export default function Header() {
  let mode = useScreenMonitor()
  let element
  switch (mode) {
    case DISPLAY_MODE.DESKTOP:
      element = <DesktopHeader />
      break
    case DISPLAY_MODE.TABLET:
      element = <TabletHeader />
      break
    case DISPLAY_MODE.MOBILE:
      element = <MobileHeader />
  }
  return element
}
