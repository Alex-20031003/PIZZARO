import { useEffect, useState } from 'react';
import type { CartToast } from '../model/useCartToastStore';


interface CartToastItemProps {
  toast: CartToast
  onRemove: (id: string) => void
}

export default function CartToastItem({ toast, onRemove }: CartToastItemProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const enterFrameId = window.requestAnimationFrame(() => {
      setIsVisible(true)
    })

    const exitTimerId = window.setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    const timerId = window.setTimeout(() => {
      onRemove(toast.id)
    }, 2000)

    return () => {
      window.cancelAnimationFrame(enterFrameId)
      window.clearTimeout(exitTimerId)
      window.clearTimeout(timerId)
    }
  }, [toast.id, onRemove])


  const message =
    toast.quantity === 1
      ? `"${toast.productTitle}" was successfully added to your cart!`
      : `${toast.quantity} × "${toast.productTitle}" were successfully added to your cart!`

  return (
    <div className={`p-4 bg-white flex flex-col gap-6 border-2 border-(--primary) outline-none rounded-xl transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-y-4 xl:translate-x-6 xl:translate-y-0'}`}>
      <p className='text-xl text-black font-semibold'>Added To Cart</p>
      <p className='text-base text-black'>{message}</p>
    </div>
  )
}