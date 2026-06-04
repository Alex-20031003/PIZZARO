import { Heart, ShoppingBag, User, Menu } from 'lucide-react'
import { useCartStore } from '@/features/cart/model/useCartStore'


type IconsProps= {
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onOpenNavigation: () => void
}

export default function IconItems({onOpenCart, onOpenFavorite, onOpenUser, onOpenNavigation}: IconsProps) {
  const totalCountCart = useCartStore((state) => state.getTotalCartCount())

  return (
    <div className='flex flex-row items-center justify-end gap-6'>
      <Heart onClick={onOpenFavorite} size={24} className='cursor-pointer hidden sm:block' />
      <ShoppingBag onClick={onOpenCart} size={24} className='relative cursor-pointer hidden sm:block before:content-[""] before:absolute before:top-0 before:right-0 before:w-4 before:h-4 before:bg-(--primary) before:rounded-full before:flex before:items-center before:justify-center before:text-white before:text-xs before:font-bold'>
        { totalCountCart }
      </ShoppingBag>
      <User onClick={onOpenUser} size={24} className='cursor-pointer hidden sm:block' />
      <Menu size={24} onClick={onOpenNavigation} className='sm:hidden' />
    </div>
  )
}
