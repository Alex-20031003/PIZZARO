import pizza from '@/assets/categories/pizza_pepperoni.webp';
import sushi from '@/assets/categories/sushi_mixset.webp';
import burger from '@/assets/categories/burger_bbq.webp';
import drink from '@/assets/categories/drink_cola.webp';
import allIcon from '@/assets/categories/allSvg.svg'
import pizzaIcon from '@/assets/categories/pizzaSvg.svg'
import sushiIcon from '@/assets/categories/sushiSvg.svg'
import burgerIcon from '@/assets/categories/sushiSvg.svg'
import drinkIcon from '@/assets/categories/drinkSvg.svg'
import type { Category, categoryMenu } from './types';


export const categories: Category[] = [
  {
     id: 1, 
     title: 'Pizza',
     slug: 'pizza',
     image_url: pizza
  },
  {
    id: 2,
    title: 'Sushi',
    slug: 'sushi',
    image_url: sushi
  },
  {
    id: 3,
    title: 'Burger',
    slug: 'burger',
    image_url: burger
  },
  {
    id: 4,
    title: 'Drink',
    slug: 'drink',
    image_url: drink
  }
]

export const categoriesMenu: categoryMenu[] = [
  {
    id: 1,
    title: 'All',
    slug: 'all',
    icon: allIcon
  },
  {
    id: 2, 
    title: 'Pizza',
    slug: 'pizza',
    icon: pizzaIcon
  },
  {
    id: 3, 
    title: 'Sushi',
    slug: 'sushi',
    icon: sushiIcon
  },
  {
    id: 4,
    title: 'Burgers',
    slug: 'burger',
    icon: burgerIcon
  },
  {
    id: 5,
    title: 'Drinks',
    slug: 'drink',
    icon: drinkIcon
  }
] 