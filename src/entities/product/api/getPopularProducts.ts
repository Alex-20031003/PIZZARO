import { supabase } from '@/shared/api/supabase/client';
import type { ProductCardData } from '../model/types';


export async function getPopularProducts(): Promise<ProductCardData[]> {
  const  { data, error } = await supabase
    .from('products_test')
    .select('id, title, category, slug, ingredients, image_url, base_price, discount_price, rating')
    .eq('is_active', true)
    .eq('is_available', true)
    .order('rating', { ascending: false})
    .limit(8)

    if (error) throw new Error(error.message)

    return data as ProductCardData[]
}