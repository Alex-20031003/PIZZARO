import { useQuery } from '@tanstack/react-query';
import getProductsByCategories from '../api/getProductsByCategories';
import type { ProductCategorySlug } from './types';

export default function useProductByCategory(categorySlug: ProductCategorySlug, searchValue: string) {
  return useQuery({
    queryKey: ['product', categorySlug, searchValue],
    queryFn: () => getProductsByCategories(categorySlug),
    staleTime: 1000 * 60 * 5,
  });
}
