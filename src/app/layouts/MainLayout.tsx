import Footer from '@/widgets/footer/Footer'
import Header from '@/widgets/header/Header'
import { Outlet } from 'react-router'

export function MainLayout() {
  return(
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}