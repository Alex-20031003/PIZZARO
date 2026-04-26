import { useState } from 'react';
import type { SidebarType } from './sidebar.types';

export function useSidebar() {
  const [activeSidebar, setActiveSidebar] = useState<SidebarType>(null)

  const openCart = () => setActiveSidebar('cart')
  const openFavorite = () => setActiveSidebar('favorite')
  const openUser = () => setActiveSidebar('user')
  const openNavigation = () => setActiveSidebar('navigation')
  const closeSidebar = () => setActiveSidebar(null)

  return {
    activeSidebar,
    openCart,
    openFavorite,
    openUser,
    openNavigation,
    closeSidebar
  }
}
