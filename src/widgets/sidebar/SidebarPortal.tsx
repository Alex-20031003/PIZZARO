import { createPortal } from 'react-dom'
import Sidebar from './Sidebar'
import type { SidebarType } from './sidebar.types'


type SidebarPortalProps = {
  activeSidebar: SidebarType
  onClose: () => void
}

export default function SidebarPortal({activeSidebar, onClose}: SidebarPortalProps) {
  return createPortal(
    <Sidebar activeSidebar={activeSidebar} onClose={onClose} />,
    document.body
  )
}
