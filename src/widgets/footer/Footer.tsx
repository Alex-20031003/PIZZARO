import Container from '@/shared/ui/Container';
import { MENU_ITEMS, CONTACT_ITEMS, INFO_ITEMS, SOCIAL_ITEMS } from './footer.data';
import logo from '@/assets/logo.svg';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className='bg-(--black) text-(--light-grey) py-6'>
      <Container>
        <div className='grid grid-cols-auto lg:grid-cols-4 gap-12'>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <img src={logo} alt='Logo Pizzaro' className='w-14 h-14 ' />
              <h1 className='font-semibold text-2xl sm:block hidden'>PIZZARO</h1>
            </div>
            <p className='text-sm text-white/80'>© 2026 Copyright All Rights Reserved</p>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl text-white mb-4'>Menu</h1>
            <ul className='flex flex-col gap-2'>
              {MENU_ITEMS.map(({ to, label }) => (
                <li key={to} className='text-base text-white/80 hover:text-white transition-colors duration-300'>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl text-white mb-4'>Information</h1>
            <ul className='flex flex-col gap-2'>
              {INFO_ITEMS.map(({ to, label, external }) => (
                <li key={to} className='text-base text-white/80 hover:text-white transition-colors duration-300'>
                  {external ? <a href={to}>{label}</a> : <Link to={to}>{label}</Link>}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl text-white mb-4'>Contacts</h1>
            <ul className='flex flex-col gap-2'>
              {CONTACT_ITEMS.map(({ to, label }) => (
                <li key={to} className='text-base text-white/80 hover:text-white transition-colors duration-300'>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>

            <ul className='flex flex-row gap-4 mt-4'>
              {SOCIAL_ITEMS.map(({ to, icon: Icon, label }) => (
                <li key={to}>
                  <a href={to} aria-label={label} target="_blank" rel='noopener noreferrer' className='text-white/80 hover:text-white transition-colors duration-300'>
                    <Icon  />
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