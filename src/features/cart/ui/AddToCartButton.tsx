import type { ProductCardData } from '@/entities/product/model/types'
import { useCartStore } from '../model/useCartStore'

interface AddToCartButtonProps {
  product: ProductCardData
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <button
      type='button'
      onClick={() => {
        addItem({
          id: product.id,
          title: product.title,
          image_url: product.image_url,
          price: product.discount_price ?? product.base_price
        })
      }}
      className='bg-(--primary) text-white rounded-xl py-3 w-full flex-1'
    >
      Add To Cart
    </button>
  )
}
