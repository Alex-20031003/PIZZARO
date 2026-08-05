export { default as ProductCard } from '@/entities/product/ui/ProductCard'

export { default as getProductByCategories } from '@/entities/product/api/getProductsByCategories'
export { default as getProductBySlug } from '@/entities/product/api/getProductBySlug'

export type { ProductCardData } from '@/entities/product/model/types'
export type { Product } from '@/entities/product/model/types'
export type { ProductCategorySlug } from '@/entities/product/model/types'
export type { ProductSortOption } from './model/types'

export { getPopularProducts } from '@/entities/product/api/getPopularProducts'
export { default as useProductsByCategory } from '@/entities/product/model/useProductsByCategory'
