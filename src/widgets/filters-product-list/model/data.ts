import type { ProductSortOption } from '@/entities/product';

export const SORT_OPTIONS: { value: ProductSortOption; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'popular', label: 'Popular' },
  { value: 'price_asc', label: 'Price: low to high' },
  { value: 'price_desc', label: 'Price: high to low' },
]