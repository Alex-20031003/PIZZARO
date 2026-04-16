import Image from '@/shared/ui/Image'
import logo from '@/assets/logo.svg'
import Container from '@/shared/ui/Container'
import NavItems from './NavItems'
import { Heart, Menu, ShoppingBag, User } from 'lucide-react'

type HeaderProps = {
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
  onOpenNavigation: () => void
}

export default function Header({ onOpenCart, onOpenFavorite, onOpenUser, onOpenNavigation }: HeaderProps) {
  return (
    <header className='flex flex-row items-center justify-between shadow-(--shadow-header) py-4'>
      <Container>
        <div className='flex flex-row w-full justify-between'>
          <div className='flex flex-row gap-35 sm:gap-20 md:gap-20 xl:gap-30'>
            <div className='flex flex-row items-center gap-4'>
              <Image src={logo} alt='Logo PIZZARO' title='Logo PIZZARO' className='w-10 h-10 md:w-12 md:w-12' />
              <p className='hidden lg:block font-semibold text-(--black) text-2xl'>PIZZARO</p>
            </div>

            <nav className='hidden sm:flex items-center justify-center'>
              <NavItems />
            </nav>
          </div>

          <div className='flex flex-row items-center justify-end gap-6'>
            <Heart onClick={onOpenFavorite} size={24} className='cursor-pointer hidden sm:block' />
            <ShoppingBag onClick={onOpenCart} size={24} className='cursor-pointer hidden sm:block' />
            <User onClick={onOpenUser} size={24} className='cursor-pointer hidden sm:block' />
            <Menu size={24} onClick={onOpenNavigation} className='sm:hidden' />
          </div>
        </div>
      </Container>

    </header>
  )
}