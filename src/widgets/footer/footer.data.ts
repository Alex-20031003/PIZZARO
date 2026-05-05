import inst from '@/assets/Inst_Logo.svg'
import facebook from '@/assets/Facebook_Logo.svg'
import tiktok from '@/assets/TikTok_Logo.svg'

export const MENU_ITEMS = [
  { to: '/menu/pizza', label: 'Pizza' },
  { to: '/menu/sushi', label: 'Sushi' },
  { to: '/menu/burgers', label: 'Burgers' },
  { to: '/menu/drinks', label: 'Drinks' }
]

export const INFO_ITEMS = [
  { to: '/about', label: 'About Us' },
  { to: 'https://maps.apple/', label: 'Maps', external: true },
  { to: 'https://youtube.com/', label: 'YouTube', external: true }
]

export const CONTACT_ITEMS = [
  { to: 'tel:+9 (99) 999-99-99', label: '+9 (99) 999-99-99' },
  { to: 'mailto:pizzarosupport@gmail.com', label: 'pizzarosupport@gmail.com' }
]

export const SOCIAL_ITEMS = [
  { to: 'https://instagram.com', icon: inst, label: 'Instagram' },
  { to: 'https://facebook.com/', icon: facebook, label: 'Facebook' },
  { to: 'https://twitter.com/', icon: tiktok, label: 'Twitter' }
]