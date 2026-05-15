import type { ProductCardData } from '@/entities/product/model/types'
import ProductCard from '@/entities/product/ui/ProductCard';

interface PopularDishesListProps {
  products: ProductCardData[]
}

export default function PopularDishesList({ products }: PopularDishesListProps) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-1'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
      }
    </ul>
  )
}