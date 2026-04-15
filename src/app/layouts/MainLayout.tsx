import Footer from '@/widgets/footer/Footer'
import Header from '@/widgets/header/Header'
import { Outlet } from 'react-router'

export function MainLayout() {
  return(
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='flex-1'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}