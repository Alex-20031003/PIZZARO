import { keepPreviousData, useQuery } from '@tanstack/react-query';
import getProductsByCategories from '../api/getProductsByCategories';
import type { ProductCategorySlug, ProductSortOption } from './types';

export default function useProductByCategory(categorySlug: ProductCategorySlug, searchValue: string, sortValue: ProductSortOption) {
  return useQuery({
    queryKey: ['product', categorySlug, searchValue, sortValue],
    queryFn: () => getProductsByCategories(categorySlug, searchValue, sortValue),
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
}
