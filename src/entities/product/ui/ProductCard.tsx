import CardBox from '@/shared/ui/CardBox';
import { Link } from 'react-router';
import type { ProductCardData } from '../model/types';
import { Heart, Star } from 'lucide-react';

interface ProductCardDataProps {
  product: ProductCardData
}


export default function PopularCard({ product }: ProductCardDataProps) {
  return (
    <CardBox className='relative group'>
      <Link to={`/menu/${product.category}/${product.slug}`} className='flex flex-col pb-3 mx-4'>
        <img src={product.image_url} alt={product.title} className='rounded-xl' />
        <p className='font-semibold text-lg whitespace-nowrap max-w-45 text-ellipsis overflow-hidden mb-1'>{product.title}</p>
        {product.discount_price ? (
          <div className='flex flex-row justify-between items-center mb-3.5'>
            <div className='flex flex-row gap-2 items-center'>
              <Star className='fill-yellow-300 stroke-yellow-300' />
              <p className='font-semibold text-base'>{product.rating.toFixed(1)}</p>
            </div>

            <div className='flex flex-row items-center gap-2'>
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

        <p className='text-sm text-(--dark-grey) font-medium italic capitalize mb-2'>{product.ingredients.map(ingredient => ingredient.replaceAll('_', ' ')).join(', ')}</p>

        <div className='flex flex-row gap-2 items-center w-full'>
          <button type='button' className='bg-(--primary) text-white rounded-xl py-3 w-full flex-1 hover:brightness-90 active:brightness-80 transition-brightness duration-300'>Add To Cart</button>
          <button type='button' className='p-3 bg-inherit rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.25)]'><Heart stroke='#F05A24' /></button>
        </div>
      </Link>
    </CardBox >
  )
}