import { supabase } from '@/shared/api/supabase/client'
import type { Category } from '../model/types.data'

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('id, title, slug, image_url')
    .order('id', { ascending: true })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data as Category[]
}