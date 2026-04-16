import type { SidebarType } from './sidebar.types'
import { X } from 'lucide-react'

type SidebarProps = {
  activeSidebar: SidebarType
  onClose: () => void
}

export default function Sidebar({ activeSidebar, onClose }: SidebarProps) {
  const isOpen = activeSidebar !== null

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-full sm:max-w-105 py-6 px-10 bg-white shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button type="button" onClick={onClose}>
          <X />
        </button>

        {activeSidebar === 'cart' && <div>Cart content</div>}
        {activeSidebar === 'favorite' && <div>Favorite content</div>}
        {activeSidebar === 'user' && <div>User content</div>}
        {activeSidebar === 'navigation' && <div>Navigation</div>}
      </aside>
    </>
  )
}
