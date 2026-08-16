import { Link } from 'react-router';
import { useCartStore } from '../model/useCartStore';

export default function CartSummary({ totalPrice, onClose }: { totalPrice: number; onClose: () => void }) {
  const handleClearCart = useCartStore((state) => state.clearCart)
  const items = useCartStore((state) => state.items)

  return (
    <div className='w-full flex flex-col '>
      <div className='flex flex-row w-full items-center justify-between mb-4'>
        <h2 className='font-semibold text-2xl'>Total</h2>
        <p className='text-xl'>${totalPrice.toFixed(2)}</p>
      </div>
      {items.length === 0 ? (
        <button
          type='button'
          className='py-4 bg-(--primary)/80 text-white rounded-lg w-full mb-2'
          disabled
        >
          Checkout
        </button>
      ) : (
        <Link
          to='/checkout'
          onClick={onClose}
          className='py-4 flex items-center justify-center bg-(--primary) text-white rounded-lg w-full mb-2'
        >
          Checkout
        </Link>
      )}

      <button
        type='button'
        onClick={handleClearCart}
        className={`py-4 bg-(--light-grey) text-black rounded-lg ${items.length === 0 ? 'hidden' : 'block'}`}
        disabled={items.length === 0}
      >
        Clear Cart
      </button>
    </div>
  )
}
