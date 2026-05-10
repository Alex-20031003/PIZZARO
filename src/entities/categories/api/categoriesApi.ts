import { supabase } from '@/shared/api/supabase/client'

export interface Category {
  id: number
  title: string
  slug: string
  image_url: string | null
}

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