import logo from '@/assets/logo.svg'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to='/' className='flex flex-row items-center gap-4'>
      <img src={logo} alt='Logo PIZZARO' title='Logo PIZZARO' className='w-10 h-10 md:w-12 md:w-12' />
      <p className='hidden lg:block font-semibold text-(--black) text-2xl'>PIZZARO</p>
    </Link>
  )
}