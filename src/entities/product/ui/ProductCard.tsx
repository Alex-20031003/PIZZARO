import CardBox from '@/shared/ui/CardBox';
import { Link } from 'react-router';
import type { ProductCardData } from '../model/types';
import { Star } from 'lucide-react';
import type { ReactNode } from 'react';

interface ProductCardDataProps {
  product: ProductCardData
  classNameCardBox?: string
  action?: ReactNode
}

export default function ProductCard({ product, classNameCardBox, action }: ProductCardDataProps) {
  const ingredientsList = product.ingredients.map(ingredient => ingredient.replaceAll('_', ' ')).join(', ')

  return (
    <CardBox className={`relative group ${classNameCardBox ?? ''}`}>
      <div className='flex flex-col pb-3 mx-4'>
        <Link to={`/menu/${product.category}/${product.slug}`} className='self-center'>
          <img src={product.image_url} alt={product.title} loading='lazy' decoding='async' className='sm:min-w-60 object-contain rounded-xl' />
        </Link>
        <p className='font-semibold text-lg mb-1'>{product.title}</p>
        {product.discount_price ? (
          <div className='flex flex-row justify-between items-center mb-3.5'>
            <div className='flex flex-row gap-2 items-center'>
              <Star className='fill-yellow-300 stroke-yellow-300' />
              <p className='font-semibold text-base'>{product.rating.toFixed(1)}</p>
            </div>

            <div className='flex flex-row items-center gap-2 mx-4'>
              <p className='line-through text-(--border-grey) font-medium text-base'>${product.base_price.toFixed(2)}</p>
              <p className='bg-(--primary) text-(--light-grey) p-1.5 rounded-xl font-semibold text-base'>${product.discount_price.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className='flex flex-row w-full items-center justify-between mb-3.5'>
            <div className='flex flex-row gap-2 items-center'>
              <Star className='fill-yellow-300 stroke-yellow-300' />
              <p className='font-semibold text-base'>{product.rating.toFixed(1)}</p>
            </div>
            <p className='font-semibold text-base py-2'>${product.base_price.toFixed(2)}</p>
          </div>
        )}

        <p title={ ingredientsList } className='text-sm text-(--dark-grey) font-medium italic capitalize mb-2 whitespace-nowrap max-w-60 text-ellipsis overflow-hidden'>
          { ingredientsList }
        </p>

        <div className='flex flex-row gap-2 items-center w-full'>
          { action }
        </div>
      </div>
    </CardBox >
  )
}