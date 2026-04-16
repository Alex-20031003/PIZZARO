import { NavLink } from 'react-router';
import { navItems } from './header.data';

export default function NavItems() {
  return (
    <ul className='hidden sm:flex sm:text-sm md:text-base lg:text-lg flex-row items-center justify-center gap-9'>
      {
        navItems.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {({ isActive }) => (
                <span className='relative inline-block'>
                  <span className='invisible font-semibold'>{label}</span>

                  <span className={`absolute left-0 top-0 ${isActive ? 'font-semibold' : 'font-normal'}`}>{label}</span>

                  <span className={`absolute -bottom-6.5 sm:-bottom-6.5 md:-bottom-7 lg:-bottom-6.5 left-0 h-0.75 bg-(--primary) transition-width duration-500 ${isActive ? 'w-full' : 'w-0'}`}></span>
                </span>
              )}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}
