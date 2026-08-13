import { MainLayout } from '@/app/layouts/MainLayout';
import { Routes, Route, Navigate } from 'react-router';
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('@/pages/home'))
const MenuPage = lazy(() => import('@/pages/menu'))
const AboutPage = lazy(() => import('@/pages/about'))
const ContactsPage = lazy(() => import('@/pages/contacts'))
const CheckoutPage = lazy(() => import('@/pages/checkout'))
const CheckoutDone = lazy(() => import('@/pages/checkout/ui/CheckoutDone'))
const NotFoundPage = lazy(() => import('@/pages/not-found'))
const ProductPage = lazy(() => import('@/pages/product'))
const AuthPage = lazy(() => import('@/pages/auth'))


export default function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={ <Navigate to='/menu/all' replace />} />
          <Route path='/menu/:categorySlug' element={<MenuPage />} />
          <Route path='/menu/:categorySlug/:productSlug' element={<ProductPage />} />
          <Route path='/auth' element={<Navigate to='/auth/sign-in' replace />} />
          <Route path='/auth/sign-in' element={<AuthPage mode='sign-in' />} />
          <Route path='/auth/sign-up' element={<AuthPage mode='sign-up' />}/>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/checkout/success' element={<CheckoutDone />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
