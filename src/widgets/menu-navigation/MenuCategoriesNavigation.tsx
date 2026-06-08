import { categoriesMenu } from '@/entities/categories/model/categories.data'
import { Check } from 'lucide-react'
import { NavLink } from 'react-router'

export default function MenuCategoriesNavigation() {
  return (
    <div className='w-full'>
      <h2 className='font-medium text-4xl'>Filters</h2>

      <ul className='mt-6 flex w-full flex-col gap-6 pr-12'>
        {categoriesMenu.map((category) => {
          const Icon = category.icon

          return (
            <li key={category.id}>
              <NavLink to={`/menu/${category.slug}`}>
                {({ isActive }) => (
                  <div className={`p-3 rounded-lg ${isActive ? 'rounded-lg bg-[#E6E6E6]' : 'hover:bg-[#E6E6E6]/60 transition-colors duration-300 ease-in-out'} `}>
                    <div className='flex flex-row justify-between'>
                      <div className='flex flex-row gap-6'>
                        <Icon className='h-6 w-6' fill={isActive ? '#F05A24' : 'black'} />
                        <p>{category.title}</p>
                      </div>

                      {isActive && (
                        <Check className='text-(--primary)' />
                      )}
                    </div>
                  </div>
                )}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}