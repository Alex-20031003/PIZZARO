import CardBox from '@/shared/ui/CardBox';
import { Link } from 'react-router';
import type { ProductCardData } from '../model/types';
import { Heart } from 'lucide-react';

interface ProductCardDataProps {
  product: ProductCardData
}

function AddToFavoriteBlock(){
  return <div><Heart /></div>
}

export default function PopularCard({ product }: ProductCardDataProps) {
  return (
    <CardBox key={product.id}>
      <Link to={`/menu/${product.category}/${product.slug}`} className='flex flex-col pb-3'>
        <img src={product.image_url} alt={product.title} className='rounded-xl h-70 w-full' />
        <div className='flex flex-row justify-between items-center px-4'>
          <p className='font-semibold text-lg py-2'>{product.title}</p>
          {product.discount_price ? 
          <div className='flex flex-row gap-1 items-center'>
            <p className='line-through text-(--border-grey) font-medium text-base'>${product.base_price.toFixed(2)}</p>
            <p className='bg-(--primary) text-(--light-grey) p-1.5 rounded-xl font-semibold text-base'>${product.discount_price.toFixed(2)}</p>
          </div> 
          :
          <p className='font-semibold text-base'>${product.base_price.toFixed(2)}</p>}
        </div>
      </Link>
    </CardBox>
  )
}