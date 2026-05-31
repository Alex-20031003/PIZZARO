import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ProductCardData } from '@/entities/product/model/types'

interface FavoriteState {
  items: ProductCardData[]
  toggleFavorite: (item: ProductCardData) => void
  clearFavorites: () => void
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      items: [],

      toggleFavorite: (item) => set((state) => {
        const isFavorite = state.items.some((product) => product.id === item.id)

        if (isFavorite) {
          return {
            items: state.items.filter((product) => product.id !== item.id)
          }
        } else {
          return {
            items: [...state.items, item]
          }
        }
      }),

      clearFavorites: () => set({ items: [] }),
    }),
    {
      name: 'favorite-storage',
      partialize: (state) => ({
        items: state.items
      }),
      version: 1,
    }
  )
)