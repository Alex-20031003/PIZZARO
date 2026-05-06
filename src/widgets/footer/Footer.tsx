import Container from '@/shared/ui/Container';
import { MENU_ITEMS, CONTACT_ITEMS, INFO_ITEMS, SOCIAL_ITEMS } from './footer.data';
import logo from '@/assets/logo.svg';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className='bg-(--black) text-(--light-grey) py-6'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-12 gap-8'>
          <div className='flex flex-col justify-between'>
            <Link to='/' className='flex flex-row gap-4 items-center'>
              <img src={logo} alt='Logo Pizzaro' className='sm:w-14 sm:h-14 w-12 h-12' />
              <h1 className='font-semibold text-xl sm:text-3xl'>PIZZARO</h1>
            </Link>
            <p className='text-sm text-white/80'>© 2026 Copyright All Rights Reserved</p>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='lg:text-xl text-lg text-white lg:mb-4 mb-2'>Menu</h1>
            <ul className='flex flex-col gap-2'>
              {MENU_ITEMS.map(({ to, label }) => (
                <li key={to} className='lg:text-base text-sm text-white/80 hover:text-(--primary) transition-colors duration-300'>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='lg:text-xl text-lg text-white lg:mb-4 mb-2'>Information</h1>
            <ul className='flex flex-col gap-2'>
              {INFO_ITEMS.map(({ to, label, external }) => (
                <li key={to} className='lg:text-base text-sm text-white/80 hover:text-(--primary) transition-colors duration-300'>
                  {external ? <a href={to}>{label}</a> : <Link to={to}>{label}</Link>}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='lg:text-xl text-lg text-white lg:mb-4 mb-2'>Contacts</h1>
            <ul className='flex flex-col gap-2'>
              {CONTACT_ITEMS.map(({ to, label }) => (
                <li key={to} className='lg:text-base text-sm text-white/80 hover:text-(--primary) transition-colors duration-300'>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>

            <ul className='flex flex-row gap-4 mt-4'>
              {SOCIAL_ITEMS.map(({ to, icon: Icon, label }) => (
                <li key={to}>
                  <a href={to} aria-label={label} target="_blank" rel='noopener noreferrer' className='text-white/80 hover:text-(--primary) transition-colors duration-300'>
                    <Icon className='w-6 h-6' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}