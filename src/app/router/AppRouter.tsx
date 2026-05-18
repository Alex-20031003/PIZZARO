import { MainLayout } from '@/app/layouts/MainLayout';
import { Routes, Route } from 'react-router';
import { lazy } from 'react'
const HomePage = lazy(() => import('@/pages/home/HomePage'))
const MenuPage = lazy(() => import('@/pages/menu/MenuPage'))
const AboutPage = lazy(() => import('@/pages/about/AboutPage'))
const ContactsPage = lazy(() => import('@/pages/contacts/ContactsPage'))
const CheckoutPage = lazy(() => import('@/pages/checkout/CheckoutPage'))
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'))

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/menu/:categorySlug' element={<MenuPage />} />
        <Route path='/menu/:categorySlug/:product' element={<MenuPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}