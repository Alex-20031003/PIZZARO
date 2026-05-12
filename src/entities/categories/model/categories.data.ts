import type { Category } from './types';
import pizzaPeperoni from '@/assets/categories/pizza_pepperoni.webp';
import sushiMixset from '@/assets/categories/sushi_mixset.webp';
import burgerBBQ from '@/assets/categories/burger_bbq.webp';
import drinkCola from '@/assets/categories/drink_cola.webp';

export const categories: Category[] = [
  { id: 1, title: 'Pizza', slug: 'pizza', image_url: pizzaPeperoni},
  { id: 2, title: 'Sushi', slug: 'sushi', image_url: sushiMixset },
  { id: 3, title: 'Burgers', slug: 'burgers', image_url: burgerBBQ },
  { id: 4, title: 'Drink', slug: 'drink', image_url: drinkCola  },
]