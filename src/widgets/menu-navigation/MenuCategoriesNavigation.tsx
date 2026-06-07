import { categoriesMenu } from '@/entities/categories/model/categories.data';
import { Check } from 'lucide-react';
import { NavLink } from 'react-router';

export default function MenuCategoriesNavigation() {
  return (
    <ul>
      { categoriesMenu.map((category) => (
        <li key={category.id}>
          <NavLink to={`/menu/${category.slug}`}>
            <div>
              <img src={category.icon} alt={category.title} />
              <p>{category.title}</p>
            </div>

            <Check />
          </NavLink>
        </li>
      )) }
    </ul>
  )
    
}
