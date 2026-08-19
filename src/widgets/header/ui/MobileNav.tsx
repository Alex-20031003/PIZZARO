import { Heart, ShoppingBag, User } from 'lucide-react';
import { navItems } from '../model/data'
import { NavLink } from 'react-router';
import { useCartStore } from '@/features/cart';
import { useFavoriteStore } from '@/features/favorite';
import { useAuth } from '@/features/auth';

type MobileNavProps = {
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onClose: () => void
}

export default function MobileNav({ onClose, onOpenCart, onOpenFavorite, onOpenUser }: MobileNavProps) {
  const { session } = useAuth()
  const cartCount = useCartStore((state) => state.items.length)
  const favoriteItems = useFavoriteStore((state) => state.itemsByUserId)
  const favoriteCount = session ? favoriteItems[session.user.id]?.length ?? 0 : 0

  return (
    <ul className='w-full flex flex-col gap-5 mt-4'>
      {navItems.map(({ to, label, end, icon: Icon }) => (
        <li key={to} className='flex flex-row gap-4 items-center'>
          <Icon size={32} />
          <NavLink to={to} end={end} onClick={onClose}>
            {({ isActive }) => (
              <span className={`text-4xl ${isActive ? 'text-(--primary)' : 'text-(--black)'}`} >{label}</span>
            )}
          </NavLink>
        </li>
      ))}

      <li className='flex flex-row gap-4 items-center text-4xl'>
        <div className='relative'>
          <Heart size={32} />
          {favoriteCount > 0 && (
            <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary) text-xs text-white'>{favoriteCount}</span>
          )}
        </div>
        <button onClick={onOpenFavorite}>Favorite</button>
      </li>
      <li className='flex flex-row gap-4 items-center text-4xl'>
        <div className='relative'>
          <ShoppingBag size={32} />
          {cartCount > 0 && (
            <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary) text-xs text-white'>{cartCount}</span>
          )}
        </div>
        <button onClick={onOpenCart} >Cart</button>
      </li>
      <li className='flex flex-row gap-4 items-center text-4xl'>
        <User size={32} />
        <button onClick={onOpenUser} >User</button>
      </li>
    </ul>
  )
}