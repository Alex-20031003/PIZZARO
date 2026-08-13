import { type CartItem } from '@/features/cart'

interface CheckoutProductCardProps {
  product: CartItem
}

export default function CheckoutProductCard({ product }: CheckoutProductCardProps) {
  const productTotalPrice = product.price * product.quantity

  return (
    <li className='flex flex-col items-stretch gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4'>
      <div className='flex min-w-0 flex-row items-center gap-3 sm:gap-4'>
        <img
          src={product.image_url}
          alt={product.title}
          title={product.title}
          className='size-16 shrink-0 rounded-xl object-cover sm:size-24 xl:size-36'
        />

        <div className='flex min-w-0 flex-col gap-1'>
          <p className='truncate text-base font-semibold xl:text-xl'>{product.title}</p>
          <p className='text-sm text-(--dark-grey) sm:text-base'>{product.quantity} × ${product.price.toFixed(2)}</p>
        </div>
      </div>

      <p className='self-end shrink-0 text-base font-medium sm:self-auto sm:text-xl'>
        ${productTotalPrice.toFixed(2)}
      </p>
    </li>
  )
}
