import ProductCard from '@/entities/product/ui/ProductCard'
import type { ProductCardData } from '@/entities/product/model/types'
import AddToCartButton from './../../cart/ui/AddToCartButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';

interface FavoriteItemCardProps {
  product: ProductCardData
}

export default function FavoriteItemCard({ product }: FavoriteItemCardProps) {
  return (
    <ProductCard 
      product={product}
      action={
        <>
          <AddToCartButton product={product} />
          <ToggleFavoriteButton product={product} />
        </>
      } 
      classNameCardBox='mb-4' />
  )
}
