import { useQuery } from '@tanstack/react-query';
import getProductsByCategories from '../api/getProductsByCategories';
import type { ProductCategorySlug } from './types';

export default function useProductByCategory(categorySlug: ProductCategorySlug) {
  return useQuery({
    queryKey: ['product', categorySlug],
    queryFn: () => getProductsByCategories(categorySlug),
    staleTime: 1000 * 60 * 5,
  });
}
