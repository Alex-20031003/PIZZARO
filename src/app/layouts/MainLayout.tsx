import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Outlet } from 'react-router'
import { SidebarPortal, useSidebar } from '@/widgets/sidebar'
import { Suspense } from 'react'
import PageLoader from '@/shared/ui/PageLoader'

export function MainLayout() {
  const {
    activeSidebar,
    openCart,
    openFavorite,
    openUser,
    openNavigation,
    closeSidebar,
  } = useSidebar()

  return (
    <div className='flex min-h-screen flex-col'>
      <Header onOpenCart={openCart} onOpenFavorite={openFavorite} onOpenUser={openUser} onOpenNavigation={openNavigation} />

      <main className='flex flex-col flex-1'>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <SidebarPortal activeSidebar={activeSidebar} onOpenCart={openCart} onOpenFavorite={openFavorite} onOpenUser={openUser} onClose={closeSidebar} />
    </div>
  )
}
