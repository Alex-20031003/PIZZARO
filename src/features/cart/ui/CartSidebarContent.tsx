import EmptyCart from './EmptyCart'
import CartItemCard from './CartItemCard'
import CartSummary from './CartSummary'
import { useCartStore } from '../model/useCartStore'

export default function CartSidebarContent({onClose}: { onClose: () => void}) {
  const items = useCartStore((state) => state.items)
  const totalPrice = items.reduce((total, item) =>  total +  item.price * item.quantity, 0)

  return (
    <div className='flex h-full flex-col '>
      <p className='font-semibold text-3xl my-6'>Cart</p>

      {items.length > 0 ? (
        <ul className='flex-1 overflow-y-auto overscroll-container [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-4'>
          {items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </ul>
      ) :
        <div className='flex-1'>
          <EmptyCart />
        </div>
      }

      <CartSummary totalPrice={totalPrice} onClose={onClose} />
    </div>
  )
}
