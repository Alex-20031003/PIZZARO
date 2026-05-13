import { supabase } from '@/shared/api/supabase/client';
import type { ProductCardData } from '../model/types';


export async function getPopularProducts(): Promise<ProductCardData[]> {
  const  { data, error } = await supabase
    .from('products')
    .select('id, title, slug, image_url, base_price, discount_price, rating')
    .eq('is_active', true)
    .eq('is_availible', true)
    .order('rating', { ascending: false})
    .limit(8)

    if (error) throw new Error(error.message)

    return data as ProductCardData[]
}