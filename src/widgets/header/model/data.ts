import { Home, Info, Menu, Phone, type LucideIcon } from 'lucide-react'

export interface NavItem {
  to: string
  label: string
  end?: boolean
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Home', end: true, icon: Home },
  { to: '/menu', label: 'Menu', icon: Menu },
  { to: '/about', label: 'About Us', icon: Info },
  { to: '/contacts', label: 'Contacts', icon: Phone }
]