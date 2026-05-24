import CardBox from '@/shared/ui/CardBox'
import type { CartItem } from '../model/types'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '../model/useCartStore'

interface CartItemCardProps {
  item: CartItem
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  return (
    <CardBox className='flex flex-col mb-6'>
      <img src={item.image_url} alt={item.title} className='rounded-t-lg' />

      <div className='p-4 rounded-b-lg w-full flex flex-col'>
        <div className='w-full flex flex-row items-center justify-between mb-1'>
          <h4 className='font-semibold text-xl'>{item.title}</h4>
          <button type='button' onClick={() => removeItem(item.id)}>
            <Trash2 className='hover:stroke-(--primary) transition-colors duration-300' size={24} />
          </button>
        </div>

        <div className='flex flex-col mb-1'>
          <p className='font-semibold text-lg'>${(item.price * item.quantity).toFixed(2)}</p>
          <p className='text-sm text-gray-500'>${ item.price.toFixed(2) }</p>
        </div>
        <div className='w-full flex items-center justify-between'>
          <button type='button' onClick={() => decreaseQuantity(item.id)}>
            <Minus className='stroke-(--primary)' size={28} />
          </button>

          <p className='text-xl'>{item.quantity}</p>

          <button type='button' onClick={() => increaseQuantity(item.id)}>
            <Plus className='stroke-(--primary)' size={28} />
          </button>
        </div>
      </div>
    </CardBox >
  )
}
