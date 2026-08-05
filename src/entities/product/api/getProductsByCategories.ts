import { supabase } from '@/shared/api/supabase/client';
import type { ProductCardData, ProductCategorySlug, ProductSortOption } from '@/entities/product'



export default async function getProductByCategories(categorySlug: ProductCategorySlug, searchValue: string, sortValue: ProductSortOption): Promise<ProductCardData[]> {
  let query = supabase
    .from('products')
    .select('id, title, category, slug, ingredients, image_url, base_price, discount_price, rating')
    .eq('is_active', true)
    .eq('is_available', true)

  if (categorySlug !== 'all') {
    query = query.eq('category', categorySlug)
  }

  if (searchValue) {
    query = query.ilike('title', `%${searchValue}%`)
  }

  switch (sortValue){
    case 'default':
      query = query.order('sort_order', { ascending: true });
      break;
    
    case 'popular':
      query = query.order('rating', { ascending: false })
      break;

    case 'price_asc':
      query = query.order('base_price', { ascending: true })
      break;

    case 'price_desc':
      query = query.order('base_price', { ascending: false })
      break;
  }

  const { data, error } = await query

  if (error) throw new Error(error.message)

  return data as ProductCardData[] ?? []
}