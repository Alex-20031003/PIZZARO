import { supabase } from '@/shared/api/supabase/client';
import type { ProductCardData, ProductCategorySlug } from '@/entities/product'



export default async function getProductByCategories(categorySlug: ProductCategorySlug, searchValue: string): Promise<ProductCardData[]> {
  let query = supabase
    .from('products')
    .select('id, title, slug, ingredients, image_url, base_price, discount_price, rating')
    .eq('is_active', true)
    .eq('is_available', true)
    .order('sort_order', { ascending: true });

  if (categorySlug !== 'all') {
    query = query.eq('category', categorySlug)
  }

  if (searchValue) {
    query = query.ilike('title', searchValue)
  }

  const { data, error } = await query

  if (error) throw new Error(error.message)

  return data as ProductCardData[] ?? []
}