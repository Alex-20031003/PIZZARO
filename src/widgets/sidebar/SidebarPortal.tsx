import { createPortal } from 'react-dom'
import Sidebar from './Sidebar'
import type { SidebarType } from './sidebar.types'


type SidebarPortalProps = {
  activeSidebar: SidebarType
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onClose: () => void
}

export default function SidebarPortal({activeSidebar, onClose, onOpenCart, onOpenFavorite, onOpenUser}: SidebarPortalProps) {
  return createPortal(
    <Sidebar activeSidebar={activeSidebar} onOpenCart={onOpenCart} onOpenFavorite={onOpenFavorite} onOpenUser={onOpenUser} onClose={onClose} />,
    document.body
  )
}
