import { useQuery } from '@tanstack/react-query';
import getProductsByCategories from '../api/getProductsByCategories';
import type { ProductCategorySlug } from './types';

export default function useProductByCategory(categorySlug: ProductCategorySlug, searchValue: string) {
  return useQuery({
    queryKey: ['product', categorySlug, searchValue],
    queryFn: () => getProductsByCategories(categorySlug, searchValue),
    staleTime: 1000 * 60 * 5,
  });
}
