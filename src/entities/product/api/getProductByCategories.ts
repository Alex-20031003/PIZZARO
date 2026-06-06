import { supabase } from '@/shared/api/supabase/client';



export async function getProductByCategories(categorySlug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('id, title, category, slug, ingredients, image_url, base_price, discount_price, rating')
    .eq('category', categorySlug)
    .eq('is_active', true)
  
    if (error) throw new Error(error.message)

    return { data, error }
}