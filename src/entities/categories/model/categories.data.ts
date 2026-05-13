import pizza from '@/assets/categories/pizza_pepperoni.webp';
import sushi from '@/assets/categories/sushi_mixset.webp';
import burger from '@/assets/categories/burger_bbq.webp';
import drink from '@/assets/categories/drink_cola.webp';
import type { Category } from './types';


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