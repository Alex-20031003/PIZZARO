import type { SidebarType } from './sidebar.types'
import { X } from 'lucide-react'
import MobileNav from '../header/MobileNav'
import CartSidebarContent from '@/features/cart/ui/CartSidebarContent'
import FavoriteSidebarContent from '@/features/favorite/ui/FavoriteSidebarContent'
import { useEffect } from 'react'

type SidebarProps = {
  activeSidebar: SidebarType
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onClose: () => void
}

export default function Sidebar({ activeSidebar, onClose, onOpenCart, onOpenFavorite, onOpenUser }: SidebarProps) {
  const isOpen = activeSidebar !== null

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-h-screen max-w-full flex-col overflow-hidden sm:max-w-105 py-5 px-10 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button type="button" onClick={onClose}>
          <X size={36} />
        </button>

        <div className='min-h-0 flex-1'>
          {activeSidebar === 'cart' && <CartSidebarContent onClose={onClose} />}
          {activeSidebar === 'favorite' && <FavoriteSidebarContent />}
          {activeSidebar === 'user' && <div>User content</div>}
          {activeSidebar === 'navigation' && <MobileNav onOpenCart={onOpenCart} onOpenFavorite={onOpenFavorite} onOpenUser={onOpenUser} onClose={onClose} />}
        </div>
      </aside>
    </>
  )
}
