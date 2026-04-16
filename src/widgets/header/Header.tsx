import Image from '@/shared/ui/Image'
import logo from '@/assets/logo.svg'
import Container from '@/shared/ui/Container'
import NavItems from './NavItems'
import { Heart, ShoppingBag, User } from 'lucide-react'

type HeaderProps = {
  onOpenCart: () => void
  onOpenFavorite: () => void
  onOpenUser: () => void
}

export default function Header({ onOpenCart, onOpenFavorite, onOpenUser }: HeaderProps) {
  return (
    <header className='flex flex-row items-center justify-between shadow-(--shadow-header) py-4'>
      <Container>
        <div className='flex flex-row w-full justify-between'>
          <div className='flex flex-row max-w-2xl w-full justify-between'>
            <div className='flex flex-row items-center justify-between max-w-43 w-full'>
              <Image src={logo} alt='Logo PIZZARO' title='Logo PIZZARO' className='w-12 h-12' />
              <p className='font-semibold text-(--black) text-2xl'>PIZZARO</p>
            </div>

            <nav className='flex flex-row max-w-90 w-full items-center justify-between'>
              <NavItems />
            </nav>
          </div>

          <div className='flex flex-row items-center justify-between max-w-30 w-full'>
            <Heart onClick={onOpenFavorite} className='cursor-pointer' />
            <ShoppingBag onClick={onOpenCart} className='cursor-pointer' />
            <User onClick={onOpenUser} className='cursor-pointer' />
          </div>
        </div>
      </Container>

    </header>
  )
}