import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ProductCardData } from '@/entities/product/model/types'

interface FavoriteState {
  itemsByUserId: Record<string, ProductCardData[]>
  toggleFavorite: (userId: string, item: ProductCardData) => void
  clearFavorites: (userId: string) => void
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      itemsByUserId: {},

      toggleFavorite: (userId, item) =>
        set((state) => {
          const userItems = state.itemsByUserId[userId] ?? []

          const isFavorite = userItems.some((product) => product.id === item.id)

          const nextItems = isFavorite
            ? userItems.filter(product => product.id !== item.id)
            : [...userItems, item]

          return {
            itemsByUserId: {
              ...state.itemsByUserId,
              [userId]: nextItems,
            }
          }
        }),

      clearFavorites: (userId) =>
        set((state) => ({
          itemsByUserId: {
            ...state.itemsByUserId,
            [userId]: []
          },
        })),
      }),
    {
      name: 'favorite-storage',
      partialize: (state) => ({
        itemsByUserId: state.itemsByUserId,
      }),
      version: 2,

      migrate: () => ({
        itemsByUserId: {},
      }),
    },
  ),
)