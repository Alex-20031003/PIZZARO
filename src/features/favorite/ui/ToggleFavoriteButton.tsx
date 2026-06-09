import  type { ProductCardData } from '@/entities/product/model/types';
import { Heart } from 'lucide-react';
import { useFavoriteStore } from '../model/useFavoriteStore';

interface ToggleFavoriteButtonProps {
  product: ProductCardData
}

export default function ToggleFavoriteButton({ product }: ToggleFavoriteButtonProps) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite)
  const isFavorite = useFavoriteStore((state) => state.items.some((item) => product.id === item.id))
  
  return (
    <button 
            type='button'
            onClick={() => 
              toggleFavorite({
                id: product.id,
                title: product.title,
                category: product.category,
                slug: product.slug,
                image_url: product.image_url,
                base_price: product.base_price,
                discount_price: product.discount_price,
                ingredients: product.ingredients,
                rating: product.rating
            })}
            className='p-3 bg-inherit rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.25)]'
            >
              <Heart 
                stroke='#F05A24' 
                className={` ${ isFavorite ? 'fill-(--primary)' : '' } transition-fill duration-500 `} />
          </button>
  )
}
