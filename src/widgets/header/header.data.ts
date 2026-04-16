export interface NavItem {
  to: string
  label: string
  end?: boolean
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: 'menu', label: 'Menu' },
  { to: '/about', label: 'About Us' },
  { to: 'contacts', label: 'Contacts' }
]

