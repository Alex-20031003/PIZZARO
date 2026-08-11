import { Heart, ShoppingBag, User, Menu } from 'lucide-react'
import { useCartStore } from '@/features/cart/model/useCartStore'
import { useFavoriteStore } from '@/features/favorite/model/useFavoriteStore'
import { useAuth } from '@/features/auth'


type IconsProps = {
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onOpenNavigation: () => void
}

export default function IconItems({ onOpenCart, onOpenFavorite, onOpenUser, onOpenNavigation }: IconsProps) {
  const totalCountCart = useCartStore((state) => state.getTotalCartCount())
  const { session } = useAuth()

  const itemsByUserId = useFavoriteStore(
    (state) => state.itemsByUserId,
  )

  const totalCountFavorites = session
    ? itemsByUserId[session.user.id]?.length ?? 0
    : 0

  return (
    <div className='flex flex-row items-center justify-end gap-6'>
      <button
        onClick={onOpenFavorite}
        className='relative cursor-pointer hidden sm:block'
      >
        <Heart size={24} className='cursor-pointer hidden sm:block' />

        {totalCountFavorites > 0 && (
          <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary) text-xs text-white'>{totalCountFavorites}</span>
        )}
      </button>
      <button
        onClick={onOpenCart}
        className='relative cursor-pointer hidden sm:block'
      >
        <ShoppingBag size={24} />

        {totalCountCart > 0 && (
          <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary) text-xs text-white'>
            {totalCountCart > 5 ? '5+' : totalCountCart}
          </span>
        )}
      </button>
      <User onClick={onOpenUser} size={24} className='cursor-pointer hidden sm:block' />
      <Menu size={24} onClick={onOpenNavigation} className='sm:hidden' />
    </div>
  )
}
