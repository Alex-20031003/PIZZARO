import Container from '@/shared/ui/Container'
import NavItems from './NavItems'
import Logo from './Logo'
import IconItems from './IconItems'


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
            <Logo />
            <NavItems />
          </div>

          <IconItems onOpenCart={onOpenCart} onOpenFavorite={onOpenFavorite} onOpenNavigation={onOpenNavigation} onOpenUser={onOpenUser} />
        </div>
      </Container>
    </header>
  )
}