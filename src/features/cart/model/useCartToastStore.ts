import { create } from 'zustand'

let nextToastId = 0


export interface CartToast {
  id: string
  productTitle: string
  quantity: number
}

interface CartToastState {
  toasts: CartToast[]
  showToast: (toast: Omit<CartToast, 'id'>) => void
  removeToast: (id: string) => void
}

export const useCartToastStore = create<CartToastState>()((set) => ({
  toasts: [],

  showToast: (toast) =>
    set((state) => ({
      toasts: [
        {
          ...toast,
          id: String(++nextToastId),
        },
        ...state.toasts,
      ].slice(0, 2),
    })),

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))
