import ProductCard from '@/entities/product/ui/ProductCard'
import type { ProductCardData } from '@/entities/product/model/types'

interface FavoriteItemCardProps {
  item: ProductCardData
}

export default function FavoriteItemCard({ item }: FavoriteItemCardProps) {
  return (
    <ProductCard product={item} />
  )
}
