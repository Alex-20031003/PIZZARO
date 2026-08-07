import { useQuery } from '@tanstack/react-query';
import getProductBySlug from '../api/getProductBySlug';

export default function useProductBySlug(
  categorySlug: string | undefined,
  productSlug: string | undefined
) {
  return useQuery({
    queryKey: ['product', categorySlug, productSlug],
    queryFn: () => {
      if (!categorySlug || !productSlug) {
        throw new Error('Category and product slugs are required')
      }

      return getProductBySlug(categorySlug, productSlug)
    },
    enabled: Boolean(categorySlug && productSlug),
    staleTime: 1000 * 60 * 5,
  })
}
