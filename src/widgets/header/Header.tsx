import Image from '@/shared/ui/Image'
import logo from '@/assets/logo.svg'
import Container from '@/shared/ui/Container'
import { Link } from 'react-router'
import NavItems from './NavItems'

export default function Header() {
  return (
    <header className='flex flex-row items-center justify-between shadow-(--shadow-header) py-4'>
      <Container>
        <div className='flex flex-row max-w-2xl w-full justify-between'>
          <div className='flex flex-row items-center justify-between max-w-43 w-full'>
            <Image src={logo} alt='Logo PIZZARO' title='Logo PIZZARO' className='w-12 h-12' />
            <p className='font-semibold text-(--black) text-2xl'>PIZZARO</p>
          </div>

          <nav className='flex flex-row max-w-90 w-full items-center justify-between'>
            <NavItems />
          </nav>
        </div>

        <ul>
          <li>
            <Link to='/'>
              {/* <Image src='' /> */}
            </Link>
          </li>
        </ul>
      </Container>

    </header>
  )
}