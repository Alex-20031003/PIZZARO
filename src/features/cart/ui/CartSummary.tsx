import { Link } from 'react-router';
import { useCartStore } from '../model/useCartStore';

export default function CartSummary({ totalPrice, onClose }: { totalPrice: number; onClose: () => void }) {
  const handleClearCart = useCartStore((state) => state.clearCart)

  return (
    <div className='w-full flex flex-col '>
      <div className='flex flex-row w-full items-center justify-between mb-4'>
        <h2 className='font-semibold text-2xl'>Total</h2>
        <p className='text-xl'>${totalPrice.toFixed(2)}</p>
      </div>
      <Link to='/checkout'>
        <button type='button' className='py-4 bg-(--primary) text-white rounded-lg w-full mb-2' onClick={onClose}>Checkout</button>
      </Link>
      <button type='button' className='py-4 bg-(--light-grey) text-black rounded-lg' onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}
