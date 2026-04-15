import { MainLayout } from '@/app/layouts/MainLayout';
import { Routes, Route } from 'react-router';
import HomePage from '@/pages/home/HomePage';
import MenuPage from '@/pages/menu/MenuPage';
import AboutPage from '@/pages/about/AboutPage';
import ContactsPage from '@/pages/contacts/ContactsPage';
import CheckoutPage from '@/pages/checkout/CheckoutPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}