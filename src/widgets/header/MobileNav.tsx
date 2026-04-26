import { navItems } from './header.data'
import { NavLink } from 'react-router';

type MobileNavProps ={
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onClose: () => void
}

export default function MobileNav({onClose, onOpenCart, onOpenFavorite, onOpenUser}: MobileNavProps) {
  return (
    <ul className='w-full flex flex-col gap-5 mt-4'>
      {navItems.map(({to, label, end}) => (
        <li key={to}>
          <NavLink to={to} end={end} onClick={onClose}>
            {({isActive}) => (
              <span className={`text-4xl ${ isActive ? 'text-(--primary)' : 'text-(--black)' }`} >{label}</span>
            )}
          </NavLink>
        </li>
      ))}

      <li className='text-4xl'>
        <button onClick={onOpenFavorite}>Favorite</button>
      </li>
      <li className='text-4xl'>
        <button onClick={onOpenCart} >Cart</button>
      </li>
      <li className='text-4xl'>
        <button onClick={onOpenUser} >User</button>
      </li>
    </ul>
  )
}