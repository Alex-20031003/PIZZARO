import type { SidebarType } from '../model/types'
import { X } from 'lucide-react'
import { MobileNav } from '@/widgets/header'
import { CartSidebarContent } from '@/features/cart'
import { FavoriteSidebarContent } from '@/features/favorite'
import { UserSidebarContent } from '@/features/auth'
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
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-h-screen max-w-full flex-col overflow-hidden bg-white px-5 py-5 transition-transform duration-300 sm:max-w-105 sm:px-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          type='button'
          onClick={onClose}
          className='ml-auto rounded-full p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)'
          aria-label='Close sidebar'
        >
          <X size={36} aria-hidden='true' />
        </button>

        <div className='min-h-0 flex-1'>
          {activeSidebar === 'cart' && <CartSidebarContent onClose={onClose} />}
          {activeSidebar === 'favorite' && <FavoriteSidebarContent onClose={onClose} />}
          {activeSidebar === 'user' && <UserSidebarContent onClose={onClose} />}
          {activeSidebar === 'navigation' && <MobileNav onOpenCart={onOpenCart} onOpenFavorite={onOpenFavorite} onOpenUser={onOpenUser} onClose={onClose} />}
        </div>
      </aside>
    </>
  )
}
