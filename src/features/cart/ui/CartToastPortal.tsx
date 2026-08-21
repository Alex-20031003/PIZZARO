import { createPortal } from 'react-dom';
import CartToastItem from './CartToastItem';
import { useCartToastStore } from '../model/useCartToastStore';

export default function CartToastPortal() {
  const toasts = useCartToastStore((state) => state.toasts)
  const removeToast = useCartToastStore((state) => state.removeToast)

  if (toasts.length === 0) {
    return null
  }

  return createPortal(
    <div
      className='pointer-events-none fixed top-4 right-4 left-4 z-40 flex flex-col-reverse gap-3 xl:right-6 xl:bottom-6 xl:left-auto xl:top-auto xl:w-96'
    >
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className={index > 0 ? 'hidden xl:block' : 'block'}
        >
          <CartToastItem toast={toast} onRemove={removeToast} />
        </div>
      ))}
    </div>,
    document.body
  )
}
