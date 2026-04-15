import { NavLink } from 'react-router';
import { navItems } from './header.data';

export default function NavItems() {
  return (
    <ul className='flex flex-row max-w-90 w-full items-center justify-between'>
      {
        navItems.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {({ isActive }) => (
                <span className='relative inline-block text-lg'>
                  <span className='invisible font-semibold'>{label}</span>

                  <span className={`absolute left-0 top-0 ${isActive ? 'font-semibold' : 'font-normal'}`}>{label}</span>

                  <span className={`absolute -bottom-6.5 left-0 h-0.75 bg-(--primary) transition-width duration-500 ${isActive ? 'w-full' : 'w-0'}`}></span>
                </span>
              )}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}
