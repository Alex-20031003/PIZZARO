export { default as ProductCard } from './ui/ProductCard'

export { default as getProductByCategories } from './api/getProductsByCategories'
export { default as getProductBySlug } from './api/getProductBySlug'
export { default as getPopularProducts } from './api/getPopularProducts'

export { default as useProductsByCategory } from './model/useProductsByCategory'
export { default as useProductBySlug } from './model/useProductBySlug'

export type {
  Product,
  ProductCardData,
  ProductCategorySlug,
  ProductSortOption,
} from './model/types'
