import { categoriesMenu } from '@/entities/categories';
import { NavLink } from 'react-router';


export default function MobileMenuNavigation() {
  return (
    <ul className='flex flex-row items-center justify-start gap-6'>
      {categoriesMenu.map((category) => {
        const Icon = category.icon

        return (
          <li key={category.id}>
            <NavLink to={`/menu/${category.slug}`}>
              {({ isActive }) => (
                <div className={`sm:p-3 p-1.5 rounded-lg ${isActive ? 'rounded-lg bg-[#E6E6E6]' : 'hover:bg-[#E6E6E6]/60 transition-colors duration-300 ease-in-out'} `}>
                  <Icon className='sm:h-9 sm:w-9 w-6 h-6' fill={isActive ? '#F05A24' : 'black'} />
                </div>
              )}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
