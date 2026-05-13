import type { ProductCardData } from '@/entities/product/model/types';
import ProductCard from '@/entities/product/ui/ProductCard';
import { useEffect, useState } from 'react';


interface PopularDishesCarouselProps {
  products: ProductCardData[]
}

const VISIBLE_CARDS = 4

export default function PopularDishesCarousel({ products }: PopularDishesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const maxIndex = Math.max(products.length - VISIBLE_CARDS, 0)

  const goNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (products.length <= VISIBLE_CARDS) return

    const intervalId = window.setInterval(() => {
      goNext()
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [products.length, maxIndex])

  return (
    <div className='relative'>
      <div className='overflow-hidden'>
        <div className='flex gap-6 transition-transform duration-500 ease-out' style={{transform: `translateX(-${currentIndex * (100 / VISIBLE_CARDS)}%)`,}}>
          {products.map((product) => (
            <div key={product.id} className='shink-0 px-3'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {products.length > VISIBLE_CARDS && (
        <>
          <button type='button' onClick={goPrev} className='absolute'></button>
        </>
      )}
    </div>
  )
}