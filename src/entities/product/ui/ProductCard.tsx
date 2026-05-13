import CardBox from '@/shared/ui/CardBox';
import { Link } from 'react-router';
import type { ProductCardData } from '../model/types';

interface ProductCardDataProps {
  product: ProductCardData
}

export default function PopularDishesList({ product }: ProductCardDataProps) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-1'>
      <CardBox key={product.id}>
        <Link to={`/product/${product.category}/${product.slug}`} className='flex flex-col pb-3'>
          <img src={product.image_url} alt={product.title} className='rounded-xl' />
          <div className='flex flex-row justify-between items-center px-4'>
            <p>{product.title}</p>
            <p>${product.discount_price ? product.discount_price : product.base_price}</p>
          </div>
        </Link>
      </CardBox>
    </ul>
  )
}