import { supabase } from '@/shared/api/supabase/client';
import type { Product } from '../model/types';

export default async function getProductBySlug(
  categorySlug: string,
  productSlug: string
): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', categorySlug)
    .eq('slug', productSlug)
    .eq('is_active', true)
    .eq('is_available', true)
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  return data as Product | null
}
