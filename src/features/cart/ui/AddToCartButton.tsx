import type { ProductCardData } from '@/entities/product'
import { useCartStore } from '../model/useCartStore'

interface AddToCartButtonProps {
  product: ProductCardData
  quantity?: number
}

export default function AddToCartButton({ product, quantity = 1 }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <button
      type='button'
      onClick={() => {
        addItem({
          id: product.id,
          title: product.title,
          image_url: product.image_url,
          price: product.discount_price ?? product.base_price,
        },
        quantity,
      )
      }}
      className='bg-(--primary) text-white rounded-xl py-3 w-full flex-1'
    >
      Add To Cart
    </button>
  )
}
