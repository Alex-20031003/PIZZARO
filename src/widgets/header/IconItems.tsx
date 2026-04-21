import { Heart, ShoppingBag, User, Menu } from 'lucide-react'


type IconsProps= {
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onOpenNavigation: () => void
}

export default function IconItems({onOpenCart, onOpenFavorite, onOpenUser, onOpenNavigation}: IconsProps) {
  return (
    <div className='flex flex-row items-center justify-end gap-6'>
      <Heart onClick={onOpenFavorite} size={24} className='cursor-pointer hidden sm:block' />
      <ShoppingBag onClick={onOpenCart} size={24} className='cursor-pointer hidden sm:block' />
      <User onClick={onOpenUser} size={24} className='cursor-pointer hidden sm:block' />
      <Menu size={24} onClick={onOpenNavigation} className='sm:hidden' />
    </div>
  )
}
