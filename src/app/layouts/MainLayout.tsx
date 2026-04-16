import Footer from '@/widgets/footer/Footer'
import Header from '@/widgets/header/Header'
import { Outlet } from 'react-router'
import SidebarPortal from '@/widgets/sidebar/SidebarPortal'
import { useSidebar } from '@/widgets/sidebar/useSidebar'

export function MainLayout() {
  const {
    activeSidebar,
    openCart,
    openFavorite,
    openUser,
    openNavigation,
    closeSidebar,
  } = useSidebar()

  return(
    <div className='flex min-h-screen flex-col'>
      <Header onOpenCart={openCart} onOpenFavorite={openFavorite} onOpenUser={openUser} onOpenNavigation={openNavigation} />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />

      <SidebarPortal activeSidebar={activeSidebar} onClose={closeSidebar} />
    </div>
  )
}